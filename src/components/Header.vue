<template>
  <div class="flex mb-5 py-2">
    <From :from='from'/>
    <Infos :devis='devis' :to='to' :from='from'/>
  </div>
</template>
<script>
export default {
  name: 'Invoice-header',
  props: ['devis', 'from', 'to'],
  components: {
    From: () => import('./From.vue'),
    Infos: () => import('./Infos.vue')
  }
}
</script>
