<template>
  <div class="container  mx-auto">
    <Header :devis="devis" :from="from" :to="to" />
    <To :to="to" />
    <Title :title="title" />
    <PaymentMode :paymentmode="config.title" />
    <TableProducts :products="products" />
    <SubTable :devis="devis" :products="products" :LegalInfos="config.LegalInfos" />
    <Footer :content="config.footerContent" />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import To from './To.vue'
import Title from './Title.vue'
import PaymentMode from './PaymentMode.vue'
import TableProducts from './TableProducts.vue'
import SubTable from './Subtable.vue'

export default {
  name: 'Invoice',
  components: {
    Header,
    Footer,
    To,
    Title,
    PaymentMode,
    TableProducts,
    SubTable
  },
  props: ['devis', 'config', 'products', 'from', 'to'],
  computed: {
    title () {
      return this.config.title
    }
  }
}
</script>
