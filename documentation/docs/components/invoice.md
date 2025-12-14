---
title: Invoice
---

# Invoice

## Démo interactive

<InvoiceDemo />

## Utilisation

### Installation du package

```bash
npm install v-invoice
```

### Enregistrement global via plugin

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { install } from 'v-invoice'

const app = createApp(App)

// Optionnel: prefixe tous les composants (ex: "VInvoice")
app.use(install, { prefix: '' })

app.mount('#app')
```

Puis utilisez le composant dans vos vues:

```vue
<template>
  <Invoice :devis="devis" :config="config" :products="products" :from="from" :to="to" />
  <!-- ... -->
  <Footer :content="config.footerContent" />
  <!-- etc. -->
  
</template>
```

### Import et enregistrement local d'un seul composant

```vue
<script setup>
import { Invoice } from 'v-invoice'

const devis = {/* ...vos données... */}
const config = {/* ...votre config... */}
const products = devis['invoice-item']
const from = devis.from
const to = devis.to
</script>

<template>
  <Invoice :devis="devis" :config="config" :products="products" :from="from" :to="to" />
</template>
```

### Exemple complet (données + rendu)

```vue
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
    road: '766 Bonnet de Solférino',
    postalcode: '59828',
    city: 'West Emilieton',
    email: 'arthur.jacquet9@gmail.com'
  },
  id: 1,
  date: new Date().toISOString(),
  paymentmode: 'chèque',
  alreadypaid: 50,
  'invoice-item': [
    { id: 1, title: 'Unbranded Granite Bacon', ref: '#1', price: '132.00', quantity: 3 },
    { id: 5, title: 'Unbranded Wooden Table', ref: '#5', price: '19.00', quantity: 5 }
  ]
}

const config = {
  title: 'Invoice',
  LegalInfos: 'Usefull legal info',
  footerContent: 'Footer content'
}

const products = devis['invoice-item']
const from = devis.from
const to = devis.to
</script>

<template>
  <Invoice :devis="devis" :config="config" :products="products" :from="from" :to="to" />
</template>
```

### Styles (Tailwind CSS)

Les composants utilisent des classes Tailwind. Assurez‑vous d’avoir Tailwind configuré dans votre application.

Guide rapide:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js`:

```js
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // si vous utilisez v-invoice depuis node_modules:
    './node_modules/v-invoice/**/*.{vue,js}'
  ],
  theme: { extend: {} },
  plugins: []
}
```

`src/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Props
Name  | Type   | Description | Default
----  | :----: | ----------- | -----
devis | Object | Données de facture | —
config| Object | Configuration de rendu | —
products | Array  | Liste des lignes produits (`invoice-item`) | —
from     | Object | Émetteur de la facture (`devis.from`)      | —
to       | Object | Destinataire (`devis.to`)                  | —

## Composants disponibles

`v-invoice` exporte les composants suivants:

- `Invoice`
- `Header`, `Footer`
- `From`, `To`, `Infos`, `Title`
- `PaymentMode`, `TableProducts`, `SubTable`, `TotalTable`

Vous pouvez les enregistrer globalement via le plugin `install` ou les importer localement:

```ts
import { Header, Footer, TableProducts } from 'v-invoice'
```
