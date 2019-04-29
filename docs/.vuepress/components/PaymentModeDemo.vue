<template>
  <PaymentMode :paymentmode='paymentmode' />
</template>

<script>
import data from '../data'
export default {
  data () {
    return {
      paymentmode: 'Virement'
    }
  }
}
</script>