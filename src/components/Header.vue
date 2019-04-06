<template>
  <div class="flex mb-5 py-2">
    <From :from='devis.from'/>
    <Infos :infos='devis'/>
  </div>
</template>
<script>
export default {
  props: ['devis'],
  components: {
    From: () => import('./From.vue'),
    Infos: () => import('./Infos.vue')
  }
}
</script>
