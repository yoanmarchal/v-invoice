<template>
  <div class="flex mb-5">
    <div class="flex-1">
      {{ LegalInfos }}
    </div>
    <div class="flex-1">
      <table class="table w-full text-right">
        <tbody>
          <tr>
            <td>Total</td>
            <td>{{ filters.currency(total) }}</td>
          </tr>
          <tr>
            <td>Déjà réglé</td>
            <td>{{ filters.currency(devis.alreadypaid) }}</td>
          </tr>
          <tr>
            <td>Net à payer</td>
            <td>{{ filters.currency(toPay) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { useFilters } from '../composables/useFilters'

export default {
  name: 'Invoice__subtable',
  props: ['devis', 'LegalInfos', 'products'],
  setup() {
    const filters = useFilters()
    return { filters }
  },
  computed: {
    total () {
      return this.products
        .map((product) => product.price * product.quantity)
        .reduce((sum, elem) => sum + elem, 0)
    },
    toPay () {
      return (this.total - this.devis.alreadypaid)
    }
  }
}
</script>
