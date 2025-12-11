# Migration Vue 2 → Vue 3 + Webpack → Vite

## 📋 Résumé

Migration complète de **v-invoice** de Vue 2 + Webpack/Vue CLI vers **Vue 3 + Vite**.

- ✅ Vue 2.7.16 → Vue 3.4.0
- ✅ Webpack/Vue CLI → Vite 5.0.10
- ✅ Jest → Vitest 1.1.0
- ✅ Vulnérabilités: 18 → 8 (↓ 56%)

## 🔧 Changements Technique

### package.json (lib/)

**Dépendances:**
```json
{
  "vue": "^3.4.0"
}
```

**DevDependencies clés:**
- `vite`: ^5.0.10 (bundler)
- `@vitejs/plugin-vue`: ^5.0.4 (support Vue)
- `vitest`: ^1.1.0 (test runner)
- `@vue/test-utils`: ^2.4.3 (testing utile)
- `eslint`: ^8.57.0 + `eslint-plugin-vue`: ^9.21.1
- Supprimés: `@vue/cli-*`, `vue-loader`, `vue-template-compiler`

### Scripts npm

```json
{
  "scripts": {
    "dev": "vite",
    "preview": "vite preview",
    "build": "vite build",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore",
    "test:unit": "vitest"
  }
}
```

### Nouveaux fichiers

**vite.config.js:**
- Config library mode (UMD + ESM exports)
- Rollup options pour externe `vue`
- Entry point: `src/index.js`

**vitest.config.js:**
- jsdom environment
- Alias `@` pour `src/`
- Coverage v8 provider

**src/composables/useFilters.js:**
- Composable Vue 3 pour filters
- Exporte `currency` et `date`

### Fichiers modifiés

**src/main.js:**
```javascript
// Vue 2
new Vue({ render: h => h(App) }).$mount('#app')

// Vue 3
const app = createApp(App)
app.config.globalProperties.$currency = CurrencyFilter
app.config.globalProperties.$date = DateFilter
app.mount('#app')
```

**src/install.js:**
```javascript
// Vue 2
const install = (Vue, options = {}) => {
  Vue.component(_key, components[key])
}

// Vue 3
const install = (app, options = {}) => {
  app.component(_key, components[key])
}
```

**Components:**
- Imports: `./Header` → `./Header.vue`
- Filters: `{{ value | currency }}` → `{{ filters.currency(value) }}`
- Script: Ajout `setup()` pour composables

Exemple Infos.vue:
```vue
<template>
  <span>{{ filters.date(devis.date) }}</span>
</template>
<script>
import { useFilters } from '../composables/useFilters'
export default {
  setup() {
    const filters = useFilters()
    return { filters }
  }
}
</script>
```

## 📦 Dépendances

**lib/ (Vue 3 + Vite):**
- 1282 packages
- 8 vulnerabilities (1 low, 5 moderate, 2 high)
- ESLint 8.57.0 compatible Vue 3

**documentation/ (VuePress 1 + Vue 2.7):**
- 1529 packages
- 97 vulnerabilities (legacy VuePress 1)
- Reste sur Vue 2.7.16 pour compatibilité VuePress 1

## ✅ Build & Tests

### lib/

```bash
npm run build      # Vite build → dist/
npm run test:unit  # Vitest
npm run lint       # ESLint
npm run dev        # Vite dev server
```

**Output:**
- `dist/v-invoice.mjs` (ESM)
- `dist/v-invoice.umd.js` (UMD)
- Gzip: ~2.3 KB

### documentation/

```bash
npm run docs:build  # VuePress build
npm run docs:dev    # VuePress dev server
```

## 🔄 Breaking Changes

### Pour les consommateurs

**Installation (unchanged):**
```javascript
import VInvoice from 'v-invoice'
app.use(VInvoice)
```

**Usage (unchanged):**
```vue
<Invoice :devis="data" :config="config" />
```

### Pour les développeurs lib

1. **Syntax Vue 3:** `<script setup>` supporté
2. **Filters:** Via composables `useFilters()`
3. **Type Safety:** Éligible pour TypeScript
4. **Tree-shaking:** Meilleur avec Vite

## 🛣️ Prochaines étapes

### Court terme (Patch)
- [ ] Mettre à jour README avec exemples Vue 3
- [ ] Publier v0.3.0 sur npm
- [ ] Ajouter changelog détaillé

### Moyen terme (Minor)
- [ ] Migration VuePress 1 → 2/Vitepress (reduce 97 vuln)
- [ ] Ajouter TypeScript support
- [ ] Plus de tests unitaires

### Long terme (Major)
- [ ] Vue 3.5+ avec stabilité confirmed
- [ ] Considérer Monorepo avec pnpm
- [ ] Multi-framework support

## 📝 Commits

```
feat: migrate to Vue 3 + Vite

- Upgrade vue 2.7.16 → 3.4.0
- Replace webpack/vue-cli → vite 5.0.10
- Replace jest → vitest 1.1.0
- Adapt components for Vue 3 Composition API
- Remove filters syntax, use composables
- Add vitest config for testing

BREAKING CHANGE: Requires Node 18+
