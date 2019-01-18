<template>
  <div class="columns head ">
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
