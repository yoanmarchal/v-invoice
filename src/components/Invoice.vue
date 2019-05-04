<template>
  <div class="container  mx-auto">
    <Header :devis='devis'/>
    <To :to='devis.to'/>
    <Title :title='title'/>
    <PaymentMode :paymentmode='config.title' />
    <TableProducts :products="devis.products"/>
    <SubTable :devis='devis' :LegalInfos='config.LegalInfos'/>
    <Footer :content="config.footerContent"/>
  </div>
</template>

<script>
export default {
  name: 'Invoice',
  components: {
    'Header': () => import('./Header'),
    'Footer': () => import('./Footer'),
    'To': () => import('./To.vue'),
    'Title': () => import('./Title.vue'),
    'PaymentMode': () => import('./PaymentMode.vue'),
    'TableProducts': () => import('./TableProducts.vue'),
    'SubTable': () => import('./Subtable.vue')
  },
  props: ['devis', 'config'],
  computed: {
    title () {
      return this.config.title
    }
  }
}
</script>
