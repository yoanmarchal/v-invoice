<template>
  <div class="flex-1">
    <img :src="from.logo" v-if="from.logo !== null" class="img-fluid">
    <p><strong>{{ from.title }}</strong></p>
    <address>
      <p>{{ from.road }}</p>
      <span>{{ from.poststalcode }}</span>
      <span>{{ from.city }}</span>
    </address>
    <p>SIRET : {{ from.siret }}</p>
  </div>
</template>
<script>
export default {
  props: ['from']
}
</script>
