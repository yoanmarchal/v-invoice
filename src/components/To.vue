<template>
  <div class="flex justify-end mb-5">
    <div>
      <strong>{{devis.client.title}}</strong>
      <address>
          <p>{{devis.client.road}}</p>
          <span>{{devis.client.postalcode}}</span>
          <span>{{devis.client.city}}</span>
      </address>
    </div>
  </div>
</template>
<script>
export default {
  name: 'to',
  props: ['devis']
}
</script>
