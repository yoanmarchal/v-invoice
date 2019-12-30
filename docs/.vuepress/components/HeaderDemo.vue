<template>
  <Header :devis='devis' :from='devis.from' :to='devis.to'/>
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