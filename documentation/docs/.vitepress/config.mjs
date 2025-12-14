import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  base: '/',
  title: 'v-invoice',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  vite: {
    resolve: {
      alias: {
        // Permet d'importer depuis la lib locale dans la doc
        'v-invoice': fileURLToPath(new URL('../../../lib/src', import.meta.url))
      }
    },
    server: {
      fs: {
        // Autoriser l'accès au dossier parent (lib)
        allow: ['.', '..', '../..']
      }
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Github', link: 'http://www.github.com' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Guide', link: '/introduction/guide' }
        ]
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'Invoice', link: '/components/invoice' },
          { text: 'Header', link: '/components/header' },
          { text: 'From', link: '/components/from' },
          { text: 'To', link: '/components/to' },
          { text: 'Infos', link: '/components/infos' },
          { text: 'Title', link: '/components/title' },
          { text: 'Payment Mode', link: '/components/payment-mode' },
          { text: 'Table Products', link: '/components/table-products' },
          { text: 'Subtable', link: '/components/subtable' },
          { text: 'Footer', link: '/components/footer' }
        ]
      }
    ]
  }
})
