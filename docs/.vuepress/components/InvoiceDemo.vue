<template>
  <Invoice :devis='devis' :from='devis.from' :to='devis.to' :config='config' :products="devis['invoice-item']"/>
</template>

<script>
import data from '../data'
export default {
  data () {
    return {
      ...data
    }
  }
}
</script>