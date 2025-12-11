# v-invoice

**WIP**

## Badges

[![Known Vulnerabilities](https://snyk.io/test/github/yoanmarchal/v-invoice/badge.svg)](https://snyk.io/test/github/yoanmarchal/v-invoice)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyoanmarchal%2Fv-invoice.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyoanmarchal%2Fv-invoice?ref=badge_shield)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c96e0f65-7736-4e5b-abd5-f4c6ae94f7bb/deploy-status)](https://app.netlify.com/sites/v-invoice/deploys)


## Introduction

Install *v-invoice* (Vue 3 + Vite ready):

```bash
# npm
npm i yoanmarchal/v-invoice

# yarn
yarn add yoanmarchal/v-invoice
```

Then register the plugin in a Vue 3 project:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VInvoice from 'v-invoice'

const app = createApp(App)
app.use(VInvoice)
app.mount('#app')
```

Use the component:

<p>
<details><summary>Using the component</summary><br>

```js
<template>
  <div id="app">
    <Devis :devis='devis' />
  </div>
</template>

<script>
import Devis from 'v-invoice'
export default {
  name: 'app',
  components: {
    Devis
  },
  data () {
    return {
      devis: {
        from:{
          "title": "Menard EI",
          "road": "766 Bonnet de Solférino",
          "postalcode": "59828",
          "city": "West Emilieton",
          "siret": "51280090500014",
          "logo": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E"
        },
        to:{
          "id": 0,
          "first_name": "Valentin",
          "last_name": "Dubois",
          "title": "Menard EI",
          "road": "766 Bonnet de Solférino",
          "postalcode": "59828",
          "city": "West Emilieton",
          "cellPhone": "0193952050",
          "officePhone": "+33 191765562",
          "website": "http://léo.info",
          "email": "Arthur.Jacquet9@gmail.com",
        },
        id: 1,
        date: "2017-10-01T15:17:30.865Z",
        products:[
          {
            "id": 1,
            "title": "Unbranded Granite Bacon",
            "ref": "#1",
            "price": "132.00",
            "quantity":3,
          },
          {
            "id": 5,
            "title": "Unbranded Wooden Table",
            "ref": "#5",
            "price": "19.00",
            "quantity": 5,
          }
        ],
        alreadypaid: 50,
        paymentmode:"chèque"
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~v-invoice/dist/Invoice.css";
</style>

```



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyoanmarchal%2Fv-invoice.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyoanmarchal%2Fv-invoice?ref=badge_large) [![Greenkeeper badge](https://badges.greenkeeper.io/yoanmarchal/v-invoice.svg)](https://greenkeeper.io/)
