# To

## Example

The following example is using a demo component `.vuepress/component/ToDemo.vue`. 

<to-demo/>

The demo code can be included via 

``` js
<to :to="devis.to"/>
export default {
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
```

## Props
Name | Type   | Description | Default
---- | :----: | ----------- | -----
to   |        |             | 

## Slots
Name     | Slot props       | Description
-------- | -----------      | -----
default  |                  | 

## Methods
Name             | Params            | Description
---------------- | ----------------- | -------------------
method1          |                   |

## Events
Name             | Params            | Description
---------------- | ----------------- | -------------------
event1           |                   |