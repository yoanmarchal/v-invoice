# Subtable

## Example

<sub-table-demo/>

```js
<SubTable :devis="devis" :products="devis['invoice-item']" :LegalInfos="config.LegalInfos" />
```

## Props
Name       | Type   | Description                                | Default
---------- | :----: | ------------------------------------------ | -------
devis      | Object | Données de facture (avec `alreadypaid`)     | —
products   | Array  | Lignes produits pour calculs                | —
LegalInfos | String | Mentions légales affichées                  | —

### Import local

```vue
<script setup>
import { SubTable } from 'v-invoice'
</script>

<template>
	<SubTable :devis="devis" :products="devis['invoice-item']" :LegalInfos="config.LegalInfos" />
	<!-- fournissez les variables devis/config -->
</template>
```
