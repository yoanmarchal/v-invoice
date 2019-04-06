<template>
  <p class="mb-5">Mode de paiement : {{ devis.paymentmode }}</p>
</template>

<script>
export default {
  props: ['devis']
}
</script>
