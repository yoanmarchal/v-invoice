# Header

## Example

<header-demo/>

```js
<Header :devis="devis" :from="devis.from" :to="devis.to" />
```

## Props
Name  | Type   | Description                   | Default
----- | :----: | ----------------------------- | -------
devis | Object | Données complètes de facture  | —
from  | Object | Émetteur de la facture       | —
to    | Object | Destinataire de la facture   | —

### Import local

```vue
<script setup>
import { Header } from 'v-invoice'
</script>

<template>
	<Header :devis="devis" :from="devis.from" :to="devis.to" />
	<!-- variables à fournir depuis votre page -->
</template>
```