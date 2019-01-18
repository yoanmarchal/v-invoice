<template>
  <div class="invoice default module__container container ">
    <V-header :devis='devis'/>
    <To :to='devis.to'/>
    <Title :title='title'/>
    <PaymentMode :devis='devis' />
    <TableProducts :products="devis.products"/>
    <SubTable :devis='devis' :LegalInfos='config.LegalInfos'/>
    <v-footer :content="config.footerContent"/>
  </div>
</template>

<script>
export default {
  name: 'Invoice',
  components: {
    VHeader: () => import('./Header.vue'),
    To: () => import('./To.vue'),
    Title: () => import('./Title.vue'),
    PaymentMode: () => import('./PaymentMode.vue'),
    TableProducts: () => import('./TableProducts.vue'),
    SubTable: () => import('./Subtable.vue'),
    VFooter: () => import('./Footer.vue')
  },
  props: ['devis', 'config'],
  computed: {
    title () {
      return this.config.title
    }
  }
}
</script>

<style lang="scss">
  @import "~bulma";
  /* Responsive: Portrait tablets and up */
  @media print and (min-width: 768px) {
    /* Space out content a bit */
    .invoice {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      background-color: #323232;
      background-color: #fff;
      padding: 0 30px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: stretch;
    }
    .container {
        max-width: 21cm;
    }
  }

</style>
