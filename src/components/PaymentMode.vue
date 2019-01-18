<template>
  <div class="columns module__payement__mode">
    <div class="column is-6">
      Mode de paiement : {{ devis.paymentmode }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['devis']
}
</script>
