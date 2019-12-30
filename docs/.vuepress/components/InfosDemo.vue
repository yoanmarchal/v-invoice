<template>
  <Infos :devis='devis' :to='devis.to' :from='devis.from'/>
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