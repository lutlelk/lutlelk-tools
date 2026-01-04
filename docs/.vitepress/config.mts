import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'lutlelk',
      description: '轻量级 JavaScript 工具库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/introduction' },
          { text: '包文档', link: '/packages/array/index' },
          {
            text: 'GitHub',
            link: 'https://github.com/yourusername/lutlelk'
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
              text: '@lutlelk/array',
              link: '/packages/array/index'
            },
            {
              text: '@lutlelk/string',
              link: '/packages/string/index'
            },
            {
              text: '@lutlelk/object',
              link: '/packages/object/index'
            },
            {
              text: '@lutlelk/function',
              link: '/packages/function/index'
            },
            {
              text: '@lutlelk/number',
              link: '/packages/number/index'
            },
            {
              text: '@lutlelk/date',
              link: '/packages/date/index'
            },
            {
              text: '@lutlelk/dom',
              link: '/packages/dom/index'
            },
            {
              text: '@lutlelk/core',
              link: '/packages/core/index'
            },
            {
              text: '@lutlelk/async',
              link: '/packages/async/index'
            }
          ]
        },

        footer: {
          message: '基于 MIT 许可发布',
          copyright: 'Copyright © 2024-present lutlelk'
        },

        search: {
          provider: 'local'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'lutlelk',
      description: 'Lightweight JavaScript utility library',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Packages', link: '/en/packages/array/index' },
          {
            text: 'GitHub',
            link: 'https://github.com/yourusername/lutlelk'
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
              text: '@lutlelk/array',
              link: '/en/packages/array/index'
            },
            {
              text: '@lutlelk/string',
              link: '/en/packages/string/index'
            },
            {
              text: '@lutlelk/object',
              link: '/en/packages/object/index'
            },
            {
              text: '@lutlelk/function',
              link: '/en/packages/function/index'
            },
            {
              text: '@lutlelk/number',
              link: '/en/packages/number/index'
            },
            {
              text: '@lutlelk/date',
              link: '/en/packages/date/index'
            },
            {
              text: '@lutlelk/dom',
              link: '/en/packages/dom/index'
            },
            {
              text: '@lutlelk/core',
              link: '/en/packages/core/index'
            },
            {
              text: '@lutlelk/async',
              link: '/en/packages/async/index'
            }
          ]
        },

        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2024-present lutlelk'
        },

        search: {
          provider: 'local'
        }
      }
    }
  }
})
