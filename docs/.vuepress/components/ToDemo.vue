<template>
  <To :to="devis.to"/>
</template>

<script>
export default {
  data () {
    return {
      devis: {
        from:{
          "title": "Menard EI",
          "road": "766 Bonnet de Solférino",
          "postalcode": "59828",
          "city": "West Emilieton",
          "siret": "55280020150048",
          "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
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