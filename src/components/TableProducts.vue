<template>
  <table class="table w-full text-right mb-5">
    <thead class="border-black border-b">
      <tr>
        <th class="py-1">Ref</th>
        <th class="py-1">Description</th>
        <th class="py-1">Quantité</th>
        <th class="py-1">Prix</th>
        <th class="py-1">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
          <td class="py-1">{{ item.id }}</td>
          <td class="py-1">{{ item.title }}</td>
          <td class="py-1">{{ item.quantity }}</td>
          <td class="py-1">{{ item.price }}</td>
          <td class="py-1">{{ item.price * item.quantity | currency('€', 0, { symbolOnLeft: false }) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ['products']
}
</script>
