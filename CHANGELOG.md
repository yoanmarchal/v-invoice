# Changelog

## 0.3.0 (2025-12-11)
- migrate library to Vue 3.4.x and Vite 5 (library mode ESM + UMD)
- replace webpack/vue-cli build scripts with `vite build`
- add `main`/`module`/`exports` fields for package consumers
- switch tests to Vitest with Vue Test Utils v2; add `Invoice.spec.js`
- refactor filters usage via composable (`useFilters`) and update components
- align PostCSS/Tailwind config for Vite; add autoprefixer dependency
- reduce vuln count (lib) from 18 to 8; builds and tests pass
