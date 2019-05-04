module.exports = {
  base: '/',
  title: 'v-invoice',
  description: 'Just playing around',
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/plugin-active-header-links',
    '@vuepress/plugin-search'
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Github', link: 'http://www.github.com' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/guide'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          'components/invoice',
          'components/header',
          'components/from',
          'components/to',
          'components/infos',
          'components/title',
          'components/payment-mode',
          'components/table-products',
          'components/subtable',
          'components/footer'
        ]
      }
    ]
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  },
  markdown: {
    lineNumbers: true
  }
};
