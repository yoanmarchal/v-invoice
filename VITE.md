# v-invoice avec Vite

## 📁 Structure du projet

```
lib/
├── vite.config.js           # Config Vite
├── vitest.config.js         # Config tests
├── package.json             # Vue 3.4.0 + Vite 5.0.10
├── tailwind.config.js       # Tailwind CSS
├── postcss.config.js        # PostCSS config
├── .eslintrc.js             # ESLint Vue 3
├── src/
│   ├── index.js             # Entry point
│   ├── main.js              # App setup
│   ├── App.vue              # Root component
│   ├── install.js           # Plugin install
│   ├── components/
│   │   ├── Invoice.vue      # Main component
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── From.vue
│   │   ├── To.vue
│   │   ├── Title.vue
│   │   ├── Infos.vue
│   │   ├── PaymentMode.vue
│   │   ├── TableProducts.vue
│   │   ├── Subtable.vue
│   │   ├── TotalTable.vue
│   │   └── index.js         # Export tous les composants
│   ├── composables/
│   │   └── useFilters.js    # Filters comme composable
│   ├── filters/
│   │   ├── date.js
│   │   └── euro.js
│   └── assets/
│       └── css/
│           └── tailwind.css
├── tests/
│   ├── unit/
│   │   ├── Invoice.spec.js
│   │   └── __snapshots__/
│   └── data/
│       └── data.js          # Mock data
└── dist/                    # Output build
    ├── v-invoice.mjs        # ESM
    └── v-invoice.umd.js     # UMD
```

## 🚀 Commandes

```bash
# Développement
npm run dev          # Vite dev server (auto-reload)
npm run preview      # Build preview localement

# Production
npm run build        # Vite build → dist/
npm run lint         # ESLint check & fix

# Tests
npm run test:unit    # Vitest watch mode
```

## 📦 Build Output

Vite crée 2 formats pour la library:

### ESM (Modern)
**Fichier:** `dist/v-invoice.mjs`
**Utilisation:**
```javascript
import VInvoice from 'v-invoice'
app.use(VInvoice)
```

### UMD (Legacy)
**Fichier:** `dist/v-invoice.umd.js`
**Utilisation:**
```html
<script src="v-invoice.umd.js"></script>
<script>
  app.use(window.VInvoice)
</script>
```

## 🔧 Configuration détails

### vite.config.js

```javascript
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VInvoice',
      formats: ['es', 'umd'],
      fileName: (format) => `v-invoice.${format === 'es' ? 'mjs' : 'umd.js'}`
    },
    rollupOptions: {
      external: ['vue'],      // Vue pas bundled
      output: {
        globals: {
          vue: 'Vue'          # UMD global
        }
      }
    }
  }
})
```

### package.json exports

```json
{
  "main": "dist/v-invoice.umd.js",
  "module": "dist/v-invoice.mjs",
  "exports": {
    ".": {
      "import": "./dist/v-invoice.mjs",
      "require": "./dist/v-invoice.umd.js"
    }
  }
}
```

## 🧪 Tests avec Vitest

```bash
npm run test:unit    # Watch mode
npm run test:unit -- --ui  # UI dashboard
npm run test:unit -- --coverage  # Coverage report
```

**Exemple test:**
```javascript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Invoice from '../../src/components/Invoice.vue'

describe('Invoice.vue', () => {
  it('renders invoice', () => {
    const wrapper = mount(Invoice, {
      props: { /* ... */ }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
```

## 🎯 Avantages Vite vs Webpack

| Aspect | Webpack/Vue CLI | Vite |
|--------|-----------------|------|
| Dev Server | ~5-10s startup | <1s startup |
| HMR | 1-3s updates | Instant |
| Build time | 30-60s | 5-10s |
| Bundle size | Similar | Meilleur tree-shaking |
| Config | Complex | Simple |
| ESM Native | No | Yes |

## 📖 Resources

- [Vite Docs](https://vitejs.dev/)
- [Vue 3 Docs](https://vuejs.org/)
- [Vitest Docs](https://vitest.dev/)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
