<template>
  <div class="default module__container container ">
    <div class="columns head ">
      <From :from='devis.from'/>
      <Infos :infos='devis'/>
    </div>
    
    <div class="columns module__to">
      <To :to='devis.to'/>
    </div>

    <div class="module__title content has-text-centered">
        <h1>FACTURE</h1>
    </div>

    <div class="columns module__payement__mode">
      <div class="column is-6">
        Mode de paiement : {{ devis.paymentmode }}
      </div>
    </div>

    <table class="table is-fullwidth module__products">
      <thead>
        <tr>
          <th>Ref</th>
          <th>Description</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in devis['products']" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.price}}</td>
            <td> {{ item.price * item.quantity | currency('€') }}</td>
        </tr>
      </tbody>
    </table>

   
    <div class="columns module__details__footer">
      <div class="column is-6 ">
        Pénalités de retard au taux annuel de : 12,00 %
        Pas d'escompte en cas de paiement anticipé
        TVA non applicable, art.293-B du CGI
      </div>
      <div class="column is-4 is-offset-2 result has-text-right">
        <table class="table">
          <tbody>
            <tr>
              <td>Total</td>
              <td>{{ total | currency('€')  }}</td>
            </tr>
            <tr>
              <td>Déjà réglé</td>
              <td>{{ devis.alreadypaid | currency('€') }}</td>
            </tr>
            <tr>
              <td>Net à payer</td>
              <td>{{ toPay | currency('€') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="module__entreprise__special">
        <hr>
        <small>
          Dispensé d'immatriculation en application de l'article L123-1-1 du code de commerce ou en application du V de l'article 19 de la loi n°96-603 du 5 juillet 1996 relative au développement du commerce et de l'artisanat.
        </small>
    </div>

  </div>
</template>

<script>
import From from './From.vue'
import Infos from './Infos.vue'
import To from './To.vue'

export default {
  name: 'devis',
  props: ['devis'],
  computed: {
    total(){
      return this.devis.products.map((product) => {
        return (product.price * product.quantity)
      }).reduce((sum, elem) => sum + elem)
    },
    toPay(){
      return (this.total - this.devis.alreadypaid)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~bulma";
  .container {
    width: 100%;
  }
  .table {
    display:table;
    width: 100%;
  }

  /* Responsive: Portrait tablets and up */
  @media print and (min-width: 768px) {
    $spacer: 45px;
    .add{
      &--top{
        margin-top: $spacer;
      }
      &--bottom{
        margin-bottom: $spacer;
      }
    }

    body{
      font-size: 14px;
      background-color: #323232;
    }
    svg{
      fill: #323232;
      stroke: #f2f2f2;
      stroke-width: 4;
    }
    .module{
      &__container{
        background-color: #fff;
        padding: 0 30px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
      }
      &__from{

      }
      &__to{

      }
      &__title{

      }
      &__entreprise{
        &__special{

        }
      }
      &__payement{
        &__mode{

        }
      }
      &__products{
        width: 100%;
      }
      &__details{
        &__header{
          font-weight: bold;
          :last-of-type{
            text-align: right;
          }
        }
        &__wrap{

        }

        &__item{
          &:not(:last-of-type){
            margin-bottom: 10px;
          }
          :last-of-type{
            text-align: right;
          }
        }

        &__footer{
          //@extend .add--top;
          .result{
            .row{
              :last-of-type{
                text-align: right;
              }
            }
          }
        }
      }
    }
    .societe{
      .title{
        font-weight: bold;
        font-size: 1.2em;
      }
      .logo{
        width: 100px;
        margin-right: 25px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .subtitle{}
      .adress{
        .road{}
        .postalcode{}
        .city{}
      }
      .siret{}
    }

    .browserupgrade {
      margin: 0.2em 0;
      background: #ccc;
      color: #000;
      padding: 0.2em 0;
    }

    /* Space out content a bit */
    body {
      font-family: 'Montserrat', sans-serif;
    }
    .container {
        max-width: 21cm;
    }
  }
</style>
