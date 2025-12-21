<template>
  <DefaultLayout />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const DefaultLayout = DefaultTheme.Layout
</script>

<style>
/* Isoler les styles du composant Invoice */
.invoice-demo-wrapper {
  all: revert;
  font-family: system-ui, -apple-system, sans-serif;
}

.invoice-demo-wrapper * {
  all: revert;
}

/* Réinitialiser les styles VitePress pour InvoiceDemo */
.vp-doc .invoice-demo-wrapper,
.vp-doc .invoice-demo-wrapper * {
  all: revert;
}

/* Rétablir les styles Tailwind pour le composant */
.invoice-demo-wrapper {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
