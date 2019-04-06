<template>
  <div class="container  mx-auto">
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
