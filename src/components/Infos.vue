<template>
  <div>
    <p>
      <span>Facture </span>
      <span>N°</span>
      <span>FC{{devis.id}}</span>
    </p>
    <p>
      <span>Date: </span>
      <span>{{ devis.date | date }}</span>
    </p>
    <p>
      <span>Code Client: </span>
      <span>CL</span>
      <span>{{devis.client.id}}</span></p>
  </div>
</template>
<script>
export default {
  name: 'infos',
  props: ['devis']
}
</script>
