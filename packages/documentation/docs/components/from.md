# From

## Example

<from-demo/>

```js
<From :from="devis.from" />
```

## Props
Name | Type   | Description               | Default
---- | :----: | ------------------------- | -------
from | Object | Émetteur de la facture    | —

### Import local

```vue
<script setup>
import { From } from 'v-invoice'
</script>

<template>
	<From :from="devis.from" />
	<!-- fournissez la variable devis dans votre page -->
</template>
```
