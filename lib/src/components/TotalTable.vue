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
  props: ['devis', 'LegalInfos'],
  setup() {
    const filters = useFilters()
    return { filters }
  },
  computed: {
    total () {
      return this.devis.products.map((product) => {
        return (product.price * product.quantity)
      }).reduce((sum, elem) => sum + elem)
    },
    toPay () {
      return (this.total - this.devis.alreadypaid)
    }
  }
}
</script>
