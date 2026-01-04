import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'lutlelk-tools',
      description: '轻量级 JavaScript 工具库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/introduction' },
          { text: '包文档', link: '/packages/array/index' },
          {
            text: 'GitHub',
            link: 'https://github.com/yourusername/lutlelk-tools'
          }
        ],

        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/guide/introduction' },
                { text: '快速开始', link: '/guide/getting-started' },
                { text: '高级用法', link: '/guide/advanced-usage' },
                { text: '性能对比', link: '/guide/benchmark' }
              ]
            }
          ],
          '/packages/': [
            {
              text: '@lutlelk-tools/array',
              link: '/packages/array/index'
            },
            {
              text: '@lutlelk-tools/string',
              link: '/packages/string/index'
            },
            {
              text: '@lutlelk-tools/object',
              link: '/packages/object/index'
            },
            {
              text: '@lutlelk-tools/function',
              link: '/packages/function/index'
            },
            {
              text: '@lutlelk-tools/number',
              link: '/packages/number/index'
            },
            {
              text: '@lutlelk-tools/date',
              link: '/packages/date/index'
            },
            {
              text: '@lutlelk-tools/dom',
              link: '/packages/dom/index'
            },
            {
              text: '@lutlelk-tools/core',
              link: '/packages/core/index'
            },
            {
              text: '@lutlelk-tools/async',
              link: '/packages/async/index'
            }
          ]
        },

        footer: {
          message: '基于 MIT 许可发布',
          copyright: 'Copyright © 2024-present lutlelk-tools'
        },

        search: {
          provider: 'local'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'lutlelk-tools',
      description: 'Lightweight JavaScript utility library',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Packages', link: '/en/packages/array/index' },
          {
            text: 'GitHub',
            link: 'https://github.com/yourusername/lutlelk-tools'
          }
        ],

        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/en/guide/introduction' },
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Advanced Usage', link: '/en/guide/advanced-usage' },
                { text: 'Benchmark', link: '/en/guide/benchmark' }
              ]
            }
          ],
          '/en/packages/': [
            {
              text: '@lutlelk-tools/array',
              link: '/en/packages/array/index'
            },
            {
              text: '@lutlelk-tools/string',
              link: '/en/packages/string/index'
            },
            {
              text: '@lutlelk-tools/object',
              link: '/en/packages/object/index'
            },
            {
              text: '@lutlelk-tools/function',
              link: '/en/packages/function/index'
            },
            {
              text: '@lutlelk-tools/number',
              link: '/en/packages/number/index'
            },
            {
              text: '@lutlelk-tools/date',
              link: '/en/packages/date/index'
            },
            {
              text: '@lutlelk-tools/dom',
              link: '/en/packages/dom/index'
            },
            {
              text: '@lutlelk-tools/core',
              link: '/en/packages/core/index'
            },
            {
              text: '@lutlelk-tools/async',
              link: '/en/packages/async/index'
            }
          ]
        },

        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2024-present lutlelk-tools'
        },

        search: {
          provider: 'local'
        }
      }
    }
  }
})
