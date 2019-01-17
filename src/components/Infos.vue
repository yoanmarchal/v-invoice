<template>
  <div class="column is-4 infos">
    <div>
        <span class="type">Facture </span><span>N° </span><span class="id">FC{{infos.id}}</span>
    </div>
    <div>
        <span>Date: </span><span class="date">{{ infos.date | date }}</span>
    </div>
    <div>
        <span>Code Client: </span><span class="prefix">CL</span><span>{{infos.to.id}}</span>
    </div>
  </div>
</template>
<script>
import { createDateFilter } from 'vue-date-fns'
import locale from 'date-fns/locale/fr'

export default {
  name: 'infos',
  props: ['infos'],
  filters: {
    date: createDateFilter('DD MMMM YYYY', { locale })
  }
}
</script>
