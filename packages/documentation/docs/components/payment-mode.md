# Payment-Mode

## Example

<payment-mode-demo/>

```js
<PaymentMode :paymentmode="devis.paymentmode" />
```

## Props
Name        | Type   | Description           | Default
----------- | :----: | --------------------- | -------
paymentmode | String | Mode de paiement      | —

### Import local

```vue
<script setup>
import { PaymentMode } from 'v-invoice'
</script>

<template>
	<PaymentMode :paymentmode="devis.paymentmode" />
	<!-- fournissez la variable devis -->
</template>
```