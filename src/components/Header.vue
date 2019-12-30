<template>
  <div class="flex mb-5 py-2">
    <From :from='from'/>
    <Infos :devis='devis'/>
  </div>
</template>
<script>
export default {
  props: ['devis', 'from'],
  components: {
    From: () => import('./From.vue'),
    Infos: () => import('./Infos.vue')
  }
}
</script>
