<template>
  <Invoice :devis='devis' :from='devis.from' :to='devis.to' :config='config' :products="devis['invoice-item']"/>
</template>

<script>
import data from './../tests/data/data'

export default {
  name: 'App',
  components: {
    Invoice: () => import('./components/Invoice.vue')
  },
  data () {
    return {
      ...data
    }
  }
}
</script>
