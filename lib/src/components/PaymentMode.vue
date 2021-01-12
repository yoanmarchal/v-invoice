<template>
  <p class="mb-5">Mode de paiement : {{ paymentmode }}</p>
</template>

<script>
export default {
  name: 'invoice__paymentmode',
  props: ['paymentmode']
}
</script>
