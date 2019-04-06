<template>
  <div class="flex justify-end mb-5">
    <div>
      <strong>{{to.title}}</strong>
      <address>
          <p>{{to.road}}</p>
          <span>{{to.postalcode}}</span>
          <span>{{to.city}}</span>
      </address>
    </div>
  </div>
</template>
<script>
export default {
  name: 'to',
  props: ['to']
}
</script>
