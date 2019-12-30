<template>
  <SubTable :devis='devis' :products="devis.products" :LegalInfos='config.LegalInfos'/>
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