# Table-products

## Example

<table-products-demo/>

```js
<TableProducts :products="devis['invoice-item']" />
```

## Props
Name     | Type   | Description                              | Default
-------- | :----: | ---------------------------------------- | -------
products | Array  | Lignes produits (`id`, `title`, `price`, `quantity`) | —

### Import local

```vue
<script setup>
import { TableProducts } from 'v-invoice'
</script>

<template>
	<TableProducts :products="devis['invoice-item']" />
	<!-- fournissez la variable devis -->
</template>
```