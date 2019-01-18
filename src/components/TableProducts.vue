<template>
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
      <tr v-for="item in products" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.price * item.quantity | currency('€', 0, { symbolOnLeft: false }) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ['products']
}
</script>
<style lang="scss" scoped>
  .table {
    display:table;
    width: 100%;
  }
</style>
