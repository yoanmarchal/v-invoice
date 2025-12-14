# Infos

## Example

<infos-demo/>

```js
<Infos :devis="devis" :to="devis.to" />
```

## Props
Name  | Type   | Description                   | Default
----- | :----: | ----------------------------- | -------
devis | Object | Données complètes de facture  | —
to    | Object | Destinataire de la facture    | —

### Import local

```vue
<script setup>
import { Infos } from 'v-invoice'
</script>

<template>
	<Infos :devis="devis" :to="devis.to" />
	<!-- fournissez les variables devis/to dans votre page -->
</template>
```
