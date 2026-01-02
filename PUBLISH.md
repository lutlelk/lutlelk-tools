# 发布到公共 npm 库指南

本文档详细说明如何将 fe-utils 的各个包发布到公共 npm registry。

## 前置条件

### 1. npm 账号

确保你有一个 npm 账号：
- 访问 https://www.npmjs.com/ 注册账号
- 验证邮箱地址

### 2. npm Access Token

创建 npm automation token：
1. 访问 https://www.npmjs.com/settings/tokens
2. 点击 "Generate New Token" → "Automation"
3. 设置 token 名称（如：`fe-utils-ci`）
4. 复制生成的 token（只显示一次，请妥善保存）

### 3. GitHub Token（可选，用于创建 GitHub Release）

如果需要自动创建 GitHub Release：
1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 选择 `repo` 权限（full control）
4. 复制生成的 token

### 4. Drone CI Secrets 配置

在 Drone CI 中配置以下 secrets：

**npm_token**
- 名称：`npm_token`
- 值：步骤 2 中创建的 npm automation token

**github_token**（可选）
- 名称：`github_token`
- 值：步骤 3 中创建的 GitHub token

## 发布流程

### 方式一：通过 Drone CI 自动发布（推荐）

这是最简单的方式，适合日常发布。

#### 步骤 1：创建 changeset

```bash
# 在项目根目录运行
pnpm changeset
```

按照提示操作：
1. 选择要发布的包（可以多选）
2. 选择版本类型：
   - `patch`: Bug 修复（0.1.0 → 0.1.1）
   - `minor`: 新功能（0.1.0 → 0.2.0）
   - `major`: 破坏性变更（0.1.0 → 1.0.0）
3. 添加变更描述

这会创建一个 `.changeset/*.md` 文件。

#### 步骤 2：提交代码

```bash
git add .
git commit -m "feat: add new feature"
git push origin main
```

#### 步骤 3：Drone CI 自动执行

Drone CI 会自动执行以下步骤：
1. ✅ 安装依赖
2. ✅ 运行 lint
3. ✅ 运行类型检查
4. ✅ 运行测试
5. ✅ 构建项目
6. ✅ 更新版本（`changeset version`）
7. ✅ 发布到 npm（`changeset publish`）
8. ✅ 创建 GitHub release

#### 步骤 4：验证发布

访问 npm 验证：
- https://www.npmjs.com/package/@fe-utils/array
- https://www.npmjs.com/package/@fe-utils/string
- 等等...

### 方式二：手动发布

如果需要手动控制发布流程，可以按以下步骤操作：

#### 步骤 1：发布前检查

```bash
# 检查所有包的配置是否正确
pnpm check-publish
```

这个脚本会检查：
- ✅ 包是否设置为 public
- ✅ 是否有描述和关键词
- ✅ 是否有版本号
- ✅ 是否有正确的入口文件
- ✅ dist 目录是否存在

#### 步骤 2：构建项目

```bash
# 构建所有包
pnpm build
```

#### 步骤 3：更新版本

```bash
# 更新所有包的版本号
pnpm version
```

这会：
- 读取所有 changeset
- 更新相关包的 version
- 生成 CHANGELOG.md
- 删除已应用的 changeset

#### 步骤 4：登录 npm

```bash
# 使用 token 登录
npm config set //registry.npmjs.org/:_authToken YOUR_NPM_TOKEN

# 或者使用用户名密码登录（不推荐）
npm login
```

#### 步骤 5：发布

```bash
# 发布所有包
pnpm release

# 或者使用 changeset publish
pnpm changeset publish
```

#### 步骤 6：创建 Git Tag（可选）

```bash
# 创建并推送 tag
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
```

### 方式三：通过 Tag 触发发布

如果你已经准备好了版本，可以通过 tag 触发发布：

```bash
# 1. 确保版本已更新
pnpm version

# 2. 构建项目
pnpm build

# 3. 创建并推送 tag
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
```

Drone CI 会自动：
- 运行所有测试
- 发布到 npm

## 包列表

以下是所有需要发布的包：

| 包名 | 版本 | 描述 |
|------|------|------|
| [@fe-utils/core](https://www.npmjs.com/package/@fe-utils/core) | 0.1.0 | Core utility functions and types |
| [@fe-utils/array](https://www.npmjs.com/package/@fe-utils/array) | 0.1.0 | Array utilities |
| [@fe-utils/string](https://www.npmjs.com/package/@fe-utils/string) | 0.1.0 | String utilities |
| [@fe-utils/object](https://www.npmjs.com/package/@fe-utils/object) | 0.1.0 | Object utilities |
| [@fe-utils/number](https://www.npmjs.com/package/@fe-utils/number) | 0.1.0 | Number utilities |
| [@fe-utils/function](https://www.npmjs.com/package/@fe-utils/function) | 0.1.0 | Function utilities |
| [@fe-utils/date](https://www.npmjs.com/package/@fe-utils/date) | 0.1.0 | Date utilities |
| [@fe-utils/dom](https://www.npmjs.com/package/@fe-utils/dom) | 0.1.0 | DOM utilities |
| [@fe-utils/async](https://www.npmjs.com/package/@fe-utils/async) | 0.1.0 | Async utilities |

## 使用示例

发布后，用户可以这样使用：

### 安装单个包

```bash
# 安装 array 包
npm install @fe-utils/array

# 安装多个包
npm install @fe-utils/array @fe-utils/string @fe-utils/object
```

### 使用包

```typescript
// 导入 array 包
import { chunk, flatten, uniq } from '@fe-utils/array'

// 导入 string 包
import { isString, isEmpty } from '@fe-utils/string'

// 导入 object 包
import { deepClone, merge } from '@fe-utils/object'

// 使用
const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### 子路径导入

某些包支持子路径导入：

```typescript
// 只导入需要的函数
import { chunk } from '@fe-utils/array/chunk'
import { debounce } from '@fe-utils/function/debounce'
import { isString } from '@fe-utils/string'
```

## 常见问题

### Q1: 发布失败，提示 "404 Not Found"

**原因**：包名已被占用或 scope 不存在

**解决**：
- 确保包名唯一：`@fe-utils/xxx`
- 如果是首次发布，确保 scope 存在
- 访问 https://www.npmjs.com/org/fe-utils 检查

### Q2: 发布失败，提示 "403 Forbidden"

**原因**：权限不足或 token 无效

**解决**：
- 检查 npm token 是否有效
- 确保使用 automation token
- 重新生成 token 并更新 Drone CI secrets

### Q3: 发布失败，提示 "402 Payment Required"

**原因**：尝试发布私有包

**解决**：
- 确保 `publishConfig.access` 设置为 `public`
- 检查 package.json 中的配置

### Q4: 如何回滚已发布的版本？

**解决**：
- npm 不支持删除已发布的版本
- 可以发布新版本修复问题
- 使用 `npm deprecate` 标记旧版本：
  ```bash
  npm deprecate @fe-utils/array@0.1.0 "This version has security issues"
  ```

### Q5: 如何只发布某个包？

**解决**：
```bash
# 只发布 array 包
cd packages/array
npm publish --access public
cd ../..
```

### Q6: 发布后如何验证？

**解决**：
```bash
# 检查包是否已发布
npm view @fe-utils/array

# 查看包的版本历史
npm view @fe-utils/array versions

# 在新项目中测试
npm create vite@latest my-test
cd my-test
npm install @fe-utils/array
```

## 最佳实践

### 1. 版本管理

- 遵循语义化版本规范（Semantic Versioning）
- `patch`: Bug 修复
- `minor`: 新功能，向后兼容
- `major`: 破坏性变更

### 2. 变更日志

- 每次发布都创建 changeset
- 提供清晰的变更描述
- Changesets 会自动生成 CHANGELOG.md

### 3. 测试

- 发布前确保所有测试通过
- 运行 `pnpm check-publish` 检查配置
- 在本地测试新版本

### 4. 文档

- 保持 README.md 更新
- 更新使用示例
- 记录破坏性变更

### 5. 安全

- 使用 automation token 而非个人 token
- 定期轮换 token
- 不要在代码中硬编码 token

## 监控和维护

### 查看下载量

访问 npm 查看包的下载统计：
- https://www.npmjs.com/package/@fe-utils/array

### 查看依赖

使用 npm 检查谁在使用你的包：
```bash
npm view @fe-utils/array
```

### 处理问题

如果用户报告问题：
1. 在 GitHub Issues 中记录
2. 及时修复 bug
3. 发布新版本
4. 在 CHANGELOG 中记录修复

## 相关文档

- [CI/CD 使用指南](./CI_CD.md)
- [Changesets 文档](https://github.com/changesets/changesets)
- [npm 发布文档](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [语义化版本](https://semver.org/lang/zh-CN/)

## 支持

如果遇到问题：
1. 查看本文档的常见问题部分
2. 查看 CI/CD 文档
3. 在 GitHub Issues 中提问
