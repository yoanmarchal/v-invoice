<template>
  <div class="columns module__details">
    <div class="column is-6 ">
      {{ LegalInfos }}
    </div>
    <div class="column is-4 is-offset-2 result has-text-right">
      <table class="table">
        <tbody>
          <tr>
            <td>Total</td>
            <td>{{ total | currency('€', 0, { symbolOnLeft: false })  }}</td>
          </tr>
          <tr>
            <td>Déjà réglé</td>
            <td>{{ devis.alreadypaid | currency('€', 0, { symbolOnLeft: false }) }}</td>
          </tr>
          <tr>
            <td>Net à payer</td>
            <td>{{ toPay | currency('€', 0, { symbolOnLeft: false }) }}</td>
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
<style lang="scss" scoped>
  .table {
    display:table;
    width: 100%;
  }
</style>
