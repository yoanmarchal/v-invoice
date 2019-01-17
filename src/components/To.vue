<template>
    <div class="column is-4 is-offset-8 societe">
        <div class="title">{{to.title}}</div>
        <div class="subtitle"></div>
        <div class="adress">
            <div class="road">{{to.road}}</div>
            <span class="postalcode">{{to.postalcode}}</span>
            <span class="city">{{to.city}}</span>
        </div>
        <div class="siret"></div>
    </div>
</template>
<script>
export default {
  name: 'to',
  props: ['to']
}
</script>
