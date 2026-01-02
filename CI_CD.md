# CI/CD 使用指南

本文档说明如何使用 Drone CI 和 Changesets 进行自动化发布。

## 配置概述

项目使用以下工具进行 CI/CD：

- **Drone CI**: 持续集成和持续部署
- **Changesets**: 版本管理和变更日志生成
- **pnpm**: 包管理器

## 工作流程

### 1. 日常开发流程

当您对代码进行修改后：

```bash
# 1. 创建 changeset
pnpm changeset

# 按照提示操作：
# - 选择受影响的包
# - 选择版本类型（patch/minor/major）
# - 添加变更描述

# 2. 提交代码
git add .
git commit -m "feat: add new feature"
git push origin main
```

Drone CI 会自动运行以下步骤：
- 安装依赖
- 运行 lint
- 运行类型检查
- 运行测试
- 构建项目

### 2. 发布流程

#### 方式一：通过 main 分支发布

1. 确保所有 changeset 已提交
2. 推送到 main 分支
3. Drone CI 会自动：
   - 运行所有测试
   - 执行 `changeset version` 更新版本
   - 发布到 npm
   - 创建 GitHub release

#### 方式二：通过 tag 发布

```bash
# 1. 更新版本
pnpm version

# 2. 创建并推送 tag
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

Drone CI 会自动：
- 运行所有测试
- 发布到 npm

## Drone 配置说明

### Pipeline 1: Default Pipeline

触发条件：`main` 分支的 push、pull_request、tag 事件

步骤：
1. **install**: 安装依赖
2. **lint**: 代码检查
3. **typecheck**: 类型检查
4. **test**: 运行测试
5. **build**: 构建项目
6. **version**: 更新版本（仅 main 分支 push）
7. **publish**: 发布到 npm（仅 main 分支 push）
8. **release-tag**: 创建 GitHub release（仅 main 分支 push）

### Pipeline 2: Tag Trigger Pipeline

触发条件：tag 事件

步骤：
1. **install**: 安装依赖
2. **lint**: 代码检查
3. **typecheck**: 类型检查
4. **test**: 运行测试
5. **build**: 构建项目
6. **publish**: 发布到 npm

## Secrets 配置

在 Drone CI 中需要配置以下 secrets：

### npm_token
- 用途：发布到 npm registry
- 获取方式：https://www.npmjs.com/settings/tokens
- 权限：Automation

### github_token
- 用途：创建 GitHub release
- 获取方式：GitHub Settings > Developer settings > Personal access tokens
- 权限：repo (full control)

## Changesets 配置

### 配置文件：`.changeset/config.json`

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

### 版本类型说明

- **patch**: `1.0.0` → `1.0.1`
  - Bug 修复
  - 小的改进
  - 不影响 API 的变更

- **minor**: `1.0.0` → `1.1.0`
  - 新功能
  - 非破坏性变更
  - 向后兼容的 API 添加

- **major**: `1.0.0` → `2.0.0`
  - 破坏性变更
  - 不兼容的 API 修改
  - 重大功能重构

## 本地测试发布

在正式发布前，可以在本地测试：

```bash
# 1. 更新版本
pnpm version

# 2. 构建项目
pnpm build

# 3. 检查变更
git status

# 4. 测试发布（使用 --dry-run）
pnpm release --dry-run
```

## 常见问题

### Q: 如何回滚已发布的版本？

A: npm 不支持删除已发布的版本，但可以：
1. 发布新版本修复问题
2. 使用 `npm deprecate` 标记旧版本

### Q: 如何跳过某个包的发布？

A: 在 `.changeset/config.json` 的 `ignore` 数组中添加包名：
```json
{
  "ignore": ["@fe-utils/core"]
}
```

### Q: 如何同时发布多个包？

A: Changesets 会自动检测所有有变更的包并一起发布。

### Q: 发布失败怎么办？

A: 检查以下几点：
1. npm token 是否有效
2. 包名是否已被占用
3. package.json 中的 `publishConfig` 是否正确
4. 网络连接是否正常

## 监控发布

查看 Drone CI 构建状态：
- 访问 Drone CI 面板
- 查看对应项目的构建日志
- 关注构建状态和错误信息

查看 npm 发布状态：
- 访问 npm registry
- 搜索包名
- 查看版本历史

查看 GitHub Release：
- 访问 GitHub 仓库
- 点击 "Releases" 标签
- 查看最新的 release

## 最佳实践

1. **频繁提交 changeset**
   - 每次有意义的变更都创建 changeset
   - 避免一次性创建太多 changeset

2. **选择合适的版本类型**
   - 仔细评估变更的影响范围
   - 遵循语义化版本规范

3. **保持 changelog 清晰**
   - 提供简洁明了的变更描述
   - 使用一致的格式

4. **测试发布流程**
   - 在本地测试版本更新
   - 使用 `--dry-run` 模式预览

5. **监控构建状态**
   - 及时处理构建失败
   - 查看错误日志并修复

## 参考资源

- [Changesets 文档](https://github.com/changesets/changesets)
- [Drone CI 文档](https://docs.drone.io/)
- [语义化版本](https://semver.org/lang/zh-CN/)
- [npm 发布文档](https://docs.npmjs.com/cli/v9/commands/npm-publish)
