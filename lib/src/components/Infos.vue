<template>
  <div>
    <p>
      <span>Facture </span>
      <span>N°</span>
      <span>FC{{devis.id}}</span>
    </p>
    <p>
      <span>Date: </span>
      <span>{{ filters.date(devis.date) }}</span>
    </p>
    <p>
      <span>Code Client: </span>
      <span>CL</span>
      <span>{{to.id}}</span>
    </p>
  </div>
</template>
<script>
import { useFilters } from '../composables/useFilters'

export default {
  name: 'Invoice__header__infos',
  props: ['devis', 'to'],
  setup() {
    const filters = useFilters()
    return { filters }
  }
}
</script>
