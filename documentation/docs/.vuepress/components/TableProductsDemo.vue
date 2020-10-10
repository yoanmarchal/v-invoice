<template>
  <TableProducts :products="devis.products"/>
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