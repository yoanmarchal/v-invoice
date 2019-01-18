<template>
  <div class="column is-8 module__from societe">
    <div class="logo">
      <img :src="from.logo" class="img-fluid" alt="">
    </div>
    <div class="subtitle">{{ from.title }}</div>
    <div class="adress">
      <div class="road">{{ from.road }}</div>
      <span class="postalcode">{{ from.poststalcode }}</span>
      <span class="city">{{ from.city }}</span>
    </div>
    <div class="siret">SIRET : {{ from.siret }}</div>
  </div>
</template>
<script>
export default {
  props: ['from']
}
</script>
<style lang="scss" scoped>
  .societe{
    .title{
      font-weight: bold;
      font-size: 1.2em;
    }
  }
</style>
