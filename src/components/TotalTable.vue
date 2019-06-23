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
            <td>{{ total | currency  }}</td>
          </tr>
          <tr>
            <td>Déjà réglé</td>
            <td>{{ devis.alreadypaid | currency }}</td>
          </tr>
          <tr>
            <td>Net à payer</td>
            <td>{{ toPay | currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ['devis', 'LegalInfos'],
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
