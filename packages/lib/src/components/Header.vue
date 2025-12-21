<template>
  <div class="flex mb-5 py-2">
    <From :from="from" />
    <Infos :devis="devis" :to="to" :from="from" />
  </div>
</template>
<script>
import From from './From.vue'
import Infos from './Infos.vue'

export default {
  name: 'Invoice__header',
  props: ['devis', 'from', 'to'],
  components: {
    From,
    Infos
  }
}
</script>
