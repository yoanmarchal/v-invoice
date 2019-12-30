<template>
  <div class="container  mx-auto">
    <Header :devis='devis' :from='from' :to='to'/>
    <To :to='to'/>
    <Title :title='title'/>
    <PaymentMode :paymentmode='config.title' />
    <TableProducts :products="products"/>
    <SubTable :devis='devis' :products="products" :LegalInfos='config.LegalInfos'/>
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
  props: ['devis', 'config', 'products', 'from', 'to'],
  computed: {
    title () {
      return this.config.title
    }
  }
}
</script>
