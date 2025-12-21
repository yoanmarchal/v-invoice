<template scoped>
  <div class="invoice-demo-wrapper">
    <Invoice :devis="devis" :config="config" :products="products" :from="from" :to="to" />
  </div>
</template>

<script setup>
import { Invoice } from 'v-invoice'

const devis = {
  from: {
    title: 'Menard EI',
    road: '766 Bonnet de Solférino',
    postalcode: '59828',
    city: 'West Emilieton',
    siret: '55280020150048'
  },
  to: {
    id: 0,
    first_name: 'Valentin',
    last_name: 'Dubois',
    title: 'Menard EI',
    road: '766 Bonnet de Solférino',
    postalcode: '59828',
    city: 'West Emilieton',
    cellPhone: '0193952050',
    officePhone: '+33 191765562',
    website: 'http://leo.info',
    email: 'Arthur.Jacquet9@gmail.com'
  },
  id: 1,
  date: new Date().toISOString(),
  'invoice-item': [
    { id: 1, title: 'Unbranded Granite Bacon', ref: '#1', price: '132.00', quantity: 3 },
    { id: 5, title: 'Unbranded Wooden Table', ref: '#5', price: '19.00', quantity: 5 }
  ],
  alreadypaid: 50,
  paymentmode: 'chèque'
}

const config = {
  title: 'Test Invoice',
  LegalInfos: 'Usefull legal info',
  footerContent: 'Footer content'
}

const products = devis['invoice-item']
const from = devis.from
const to = devis.to
</script>

<style scoped>
.invoice-demo-wrapper {
  margin: 1.5rem 0;
}
</style>
