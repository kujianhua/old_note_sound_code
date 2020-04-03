const {
  description
} = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '库建华个人在线文档',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/my_note/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }]
  ],

  main:'layout/Layout.vue',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [{
        text: '个人介绍',
        link: '/introduction/',
      },
      // {
      //   text: '笔记',
      //   link: '',
      //   items: [{
      //       text: 'Node.js',
      //       link: '/language/chinese/'
      //     },
      //     {
      //       text: '前端',
      //       link: '/language/japanese/',
      //       items: [{
      //           text: 'js',
      //           link: '/language/chinese/'
      //         },
      //         {
      //           text: 'css',
      //           link: '/language/chinese/'
      //         },
      //         {
      //           text: 'html',
      //           link: '/language/chinese/'
      //         },
      //         {
      //           text: 'vue.js',
      //           link: '/language/chinese/'
      //         },
      //         {
      //           text: 'react.js',
      //           link: '/language/chinese/'
      //         },
      //       ]
      //     },
      //     {
      //       text: 'Java',
      //       link: '/language/japanese/',
      //       items: [{
      //       }]
      //     },
      //     {
      //       text: 'SQL',
      //       link: '/language/japanese/',
      //       items: [{
      //       }]
      //     },
      //   ]
      // },
      {
        text: '踩过的坑',
        link: '/guide/'
      },
      {
        text: '源码（Github）',
        link: 'https://github.com/kujianhua/my_note_sound_code'
      }
    ],
    sidebar: {
      '/introduction/': [{
        title: '个人简介',
        collapsable: false,
        children: [
          '',
          'base',
          'skill',
          'work',
        ]
      }],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
