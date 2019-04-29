<template>
  <SubTable :devis='devis' :LegalInfos='config.LegalInfos'/>
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