# Footer

## Example

<footer-demo/>

```js
<Footer :content="config.footerContent" />
```

## Props
Name    | Type   | Description            | Default
------- | :----: | ---------------------- | -------
content | String | Contenu du pied de page | —

### Import local

```vue
<script setup>
import { Footer } from 'v-invoice'
</script>

<template>
	<Footer :content="config.footerContent" />
	<!-- fournissez la variable config -->
</template>
```