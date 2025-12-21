# To

## Example

<to-demo/>

```js
<To :to="devis.to" />
```

## Props
Name | Type   | Description                | Default
---- | :----: | -------------------------- | -------
to   | Object | Destinataire de la facture | —

### Import local

```vue
<script setup>
import { To } from 'v-invoice'
</script>

<template>
	<To :to="devis.to" />
	<!-- fournissez la variable devis dans votre page -->
</template>
```