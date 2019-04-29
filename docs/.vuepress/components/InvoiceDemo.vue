<template>
  <Invoice :devis="devis" :config="config"/>
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