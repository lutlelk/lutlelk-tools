import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'fe-utils',
      description: '轻量级 JavaScript 工具库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/introduction' },
          { text: '包文档', link: '/packages/array/index' },
          {
            text: 'GitHub',
            link: 'https://github.com/yourusername/fe-utils'
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
              text: '@fe-utils/array',
              link: '/packages/array/index'
            },
            {
              text: '@fe-utils/string',
              link: '/packages/string/index'
            },
            {
              text: '@fe-utils/object',
              link: '/packages/object/index'
            },
            {
              text: '@fe-utils/function',
              link: '/packages/function/index'
            },
            {
              text: '@fe-utils/number',
              link: '/packages/number/index'
            },
            {
              text: '@fe-utils/date',
              link: '/packages/date/index'
            },
            {
              text: '@fe-utils/dom',
              link: '/packages/dom/index'
            },
            {
              text: '@fe-utils/core',
              link: '/packages/core/index'
            },
            {
              text: '@fe-utils/async',
              link: '/packages/async/index'
            }
          ]
        },

        footer: {
          message: '基于 MIT 许可发布',
          copyright: 'Copyright © 2024-present fe-utils'
        },

        search: {
          provider: 'local'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'fe-utils',
      description: 'Lightweight JavaScript utility library',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Packages', link: '/en/packages/array/index' },
          {
            text: 'GitHub',
            link: 'https://github.com/yourusername/fe-utils'
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
              text: '@fe-utils/array',
              link: '/en/packages/array/index'
            },
            {
              text: '@fe-utils/string',
              link: '/en/packages/string/index'
            },
            {
              text: '@fe-utils/object',
              link: '/en/packages/object/index'
            },
            {
              text: '@fe-utils/function',
              link: '/en/packages/function/index'
            },
            {
              text: '@fe-utils/number',
              link: '/en/packages/number/index'
            },
            {
              text: '@fe-utils/date',
              link: '/en/packages/date/index'
            },
            {
              text: '@fe-utils/dom',
              link: '/en/packages/dom/index'
            },
            {
              text: '@fe-utils/core',
              link: '/en/packages/core/index'
            },
            {
              text: '@fe-utils/async',
              link: '/en/packages/async/index'
            }
          ]
        },

        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2024-present fe-utils'
        },

        search: {
          provider: 'local'
        }
      }
    }
  }
})
