module.exports = {
  base: '/docs/',
  title: 'v-invoice',
  description: 'Just playing around',
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
          'components/component-a',
          'components/component-b',
          'components/invoice',
          'components/from',
          'components/test',
          'components/to',
          'components/infos'
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
