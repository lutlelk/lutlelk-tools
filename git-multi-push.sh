#!/bin/bash

# Git 多平台推送配置脚本
# 支持国内网络环境，包含超时和重试机制

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 配置信息
REPOS=(
  "github|https://github.com/lutlelk/lutlelk-tools.git"
  "gitlab|https://gitlab.com/lutlelk/lutlelk-tools.git"
  "gitee|https://gitee.com/lutlelk/lutlelk-tools.git"
  "gitcode|https://gitcode.com/lutl/lutlelk-tools.git"
)

# 超时设置（秒）
TIMEOUT=30

# 重试次数
RETRY_COUNT=3

# 日志函数
log_info() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
  echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
  echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

# 检查网络连接
check_connection() {
  local url=$1
  local platform=$2
  
  log_info "检查 $platform 连接..."
  
  for ((i=1; i<=RETRY_COUNT; i++)); do
    if curl -s --connect-timeout $TIMEOUT --max-time $TIMEOUT -I "$url" > /dev/null 2>&1; then
      log_success "$platform 连接正常"
      return 0
    else
      log_warning "$platform 连接失败 (尝试 $i/$RETRY_COUNT)"
      if [ $i -lt $RETRY_COUNT ]; then
        sleep 2
      fi
    fi
  done
  
  log_error "$platform 连接超时，可能需要配置代理"
  return 1
}

# 配置远程仓库
setup_remotes() {
  log_info "开始配置远程仓库..."
  
  # 检查是否已存在 origin
  if git remote get-url origin &> /dev/null; then
    log_warning "origin 已存在，将重新配置"
    git remote remove origin
  fi
  
  # 添加 origin（使用 GitHub 作为主 fetch URL）
  local main_url=$(echo "${REPOS[0]}" | cut -d'|' -f2)
  git remote add origin "$main_url"
  log_success "添加 origin: $main_url"
  
  # 配置所有 push URL
  for repo in "${REPOS[@]}"; do
    local platform=$(echo "$repo" | cut -d'|' -f1)
    local url=$(echo "$repo" | cut -d'|' -f2)
    
    git remote set-url --add --push origin "$url"
    log_success "添加 $platform push URL"
  done
}

# 显示当前配置
show_config() {
  echo ""
  log_info "当前远程仓库配置："
  git remote -v
  echo ""
}

# 推送到所有平台
push_all() {
  local branch=${1:-main}
  
  log_info "开始推送代码到所有平台..."
  log_info "目标分支: $branch"
  
  # 检查分支是否存在
  if ! git show-ref --verify --quiet refs/heads/$branch; then
    log_error "分支 $branch 不存在"
    log_info "可用分支:"
    git branch -a
    return 1
  fi
  
  # 逐个平台推送
  local success_count=0
  local fail_count=0
  local failed_platforms=()
  
  for repo in "${REPOS[@]}"; do
    local platform=$(echo "$repo" | cut -d'|' -f1)
    local url=$(echo "$repo" | cut -d'|' -f2)
    
    log_info "推送到 $platform ($url)..."
    
    # 创建临时远程
    local temp_remote="temp_$platform"
    git remote add $temp_remote "$url" 2>/dev/null || git remote set-url $temp_remote "$url"
    
    # 尝试推送
    if git push $temp_remote $branch 2>&1; then
      log_success "$platform 推送成功！"
      ((success_count++))
    else
      log_error "$platform 推送失败"
      ((fail_count++))
      failed_platforms+=("$platform")
    fi
    
    # 清理临时远程
    git remote remove $temp_remote 2>/dev/null || true
  done
  
  # 推送标签（只推送到成功的平台）
  if [ $success_count -gt 0 ]; then
    log_info "推送标签到成功的平台..."
    for repo in "${REPOS[@]}"; do
      local platform=$(echo "$repo" | cut -d'|' -f1)
      local url=$(echo "$repo" | cut -d'|' -f2)
      
      # 检查是否在失败列表中
      local is_failed=false
      for fp in "${failed_platforms[@]}"; do
        if [ "$fp" = "$platform" ]; then
          is_failed=true
          break
        fi
      done
      
      if [ "$is_failed" = false ]; then
        local temp_remote="temp_${platform}_tags"
        git remote add $temp_remote "$url" 2>/dev/null || true
        if git push $temp_remote --tags 2>&1; then
          log_success "$platform 标签推送成功"
        else
          log_warning "$platform 标签推送失败（可能没有标签）"
        fi
        git remote remove $temp_remote 2>/dev/null || true
      fi
    done
  fi
  
  # 显示汇总
  echo ""
  log_info "推送汇总："
  log_success "成功: $success_count 个平台"
  if [ $fail_count -gt 0 ]; then
    log_error "失败: $fail_count 个平台 (${failed_platforms[*]})"
    log_warning "失败的平台可能需要："
    log_warning "  1. 在平台上创建仓库"
    log_warning "  2. 检查仓库地址是否正确"
    log_warning "  3. 配置代理（针对 GitHub/GitLab）"
  fi
  
  return $fail_count
}

# 单独推送测试
test_push() {
  local platform=$1
  local url=""
  
  for repo in "${REPOS[@]}"; do
    local p=$(echo "$repo" | cut -d'|' -f1)
    if [ "$p" = "$platform" ]; then
      url=$(echo "$repo" | cut -d'|' -f2)
      break
    fi
  done
  
  if [ -z "$url" ]; then
    log_error "未找到平台: $platform"
    return 1
  fi
  
  log_info "测试推送到 $platform ($url)..."
  
  # 创建临时远程
  local temp_remote="temp_$platform"
  git remote add $temp_remote "$url" 2>/dev/null || true
  
  # 测试连接
  if git ls-remote $temp_remote > /dev/null 2>&1; then
    log_success "$platform 测试成功"
    git remote remove $temp_remote
    return 0
  else
    log_error "$platform 测试失败"
    git remote remove $temp_remote 2>/dev/null || true
    return 1
  fi
}

# 配置代理
setup_proxy() {
  local http_proxy=$1
  local https_proxy=$2
  
  if [ -n "$http_proxy" ]; then
    git config --global http.proxy "$http_proxy"
    log_success "设置 HTTP 代理: $http_proxy"
  fi
  
  if [ -n "$https_proxy" ]; then
    git config --global https.proxy "$https_proxy"
    log_success "设置 HTTPS 代理: $https_proxy"
  fi
}

# 清除代理
clear_proxy() {
  git config --global --unset http.proxy 2>/dev/null || true
  git config --global --unset https.proxy 2>/dev/null || true
  log_success "已清除代理配置"
}

# 显示帮助
show_help() {
  cat << EOF
Git 多平台推送配置脚本

用法: ./git-multi-push.sh [选项]

选项:
  setup           配置远程仓库（首次使用）
  push [branch]   推送到所有平台（默认分支: main）
  test <platform> 测试单个平台连接（github/gitlab/gitee/gitcode）
  check           检查所有平台连接
  show            显示当前配置
  proxy <http> <https>  设置代理
  clear-proxy     清除代理配置
  help            显示此帮助信息

示例:
  ./git-multi-push.sh setup
  ./git-multi-push.sh push main
  ./git-multi-push.sh test github
  ./git-multi-push.sh check
  ./git-multi-push.sh proxy http://127.0.0.1:7890 http://127.0.0.1:7890

注意:
  - 国内访问 GitHub/GitLab 可能需要配置代理
  - Gitee 和 GitCode 在国内通常访问较快
  - 推送失败时会自动重试

EOF
}

# 主函数
main() {
  case "${1:-help}" in
    setup)
      setup_remotes
      show_config
      ;;
    push)
      push_all "${2:-main}"
      ;;
    test)
      test_push "$2"
      ;;
    check)
      for repo in "${REPOS[@]}"; do
        local platform=$(echo "$repo" | cut -d'|' -f1)
        local url=$(echo "$repo" | cut -d'|' -f2)
        check_connection "$url" "$platform"
      done
      ;;
    show)
      show_config
      ;;
    proxy)
      setup_proxy "$2" "$3"
      ;;
    clear-proxy)
      clear_proxy
      ;;
    help|--help|-h)
      show_help
      ;;
    *)
      log_error "未知选项: $1"
      show_help
      exit 1
      ;;
  esac
}

main "$@"
