<template>
    <div class="default module__container container ">
      <div class="columns head module__from">
        <div class="column is-8 societe">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1300 430" class="line-drawing "><path d="M1190.75 271.096l-62.857 158.224L872.483.44h170.606zM533.266 429.44h-194.55L538.253.44h165.62zM188.687 429.443l-190.187.173L194.05.44h165.617z"/><path d="M533.266 429.44h-194.55L194.048.44h165.617zM877.47 429.44H682.92L538.254.44h169.61zM1127.893 429.44h-194.55l194.55-429H1298.5z"/></svg>
          </div>
          <div class="subtitle">{{ devis.from.title }}</div>
          <div class="adress">
            <div class="road">{{ devis.from.road }}</div>
            <span class="postalcode">{{ devis.from.poststalcode }}</span>
            <span class="city">{{ devis.from.city }}</span>
          </div>
          <div class="siret">
            SIRET : {{ devis.from.siret }}
          </div>
        </div>
        <div class="column is-4 infos">
          <div>
            <span class="type">Facture </span><span>N° </span><span class="id">FC{{devis.id}}</span>
          </div>
          <div>
            <span>Date: </span><span class="date">20/10/2015</span>
          </div>
          <div>
            <span>Code Client: </span><span class="prefix">CL</span><span>{{devis.to.id}}</span>
          </div>
        </div>

      </div>
      <div class="columns module__to">
        <div class="column is-4 is-offset-8 societe">
          <div class="title">{{devis.to.title}}</div>
          <div class="subtitle"></div>
          <div class="adress">
            <div class="road">{{devis.to.road}}</div>
            <span class="postalcode">{{devis.to.postalcode}}</span>
            <span class="city">{{devis.to.city}}</span>
          </div>
          <div class="siret"></div>
        </div>
      </div>
      <div class="module__title content has-text-centered">
          <h1>FACTURE</h1>
      </div>

      <div class="columns module__payement__mode">
        <div class="column is-6">
          Mode de paiement : {{ devis.paymentmode }}
        </div>
      </div>

      <table class="table module__products">
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
    @import "~bulma/sass/utilities/_all";
    @import "~bulma/sass/base/_all";
    @import "~bulma/sass/elements/_all";
    //@import "~bulma/sass/components/_all";
    @import "~bulma/sass/grid/_all";

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


  /* Responsive: Portrait tablets and up */
  @media screen and (min-width: 768px) {
    .container {
        max-width: 21cm;
    }
  }
</style>
