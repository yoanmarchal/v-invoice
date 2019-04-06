<template>
  <div>
    <p>
      <span>Facture </span>
      <span>N°</span>
      <span>FC{{infos.id}}</span>
    </p>
    <p>
      <span>Date: </span>
      <span>{{ infos.date | date }}</span>
    </p>
    <p>
      <span>Code Client: </span>
      <span>CL</span>
      <span>{{infos.to.id}}</span></p>
  </div>
</template>
<script>
export default {
  name: 'infos',
  props: ['infos']
}
</script>
