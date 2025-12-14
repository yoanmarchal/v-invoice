# Title

## Example

<Title-demo/>

```js
<Title :title="title" />
export default {
  data () {
    return {
      title: 'Invoice'
    }
  }
}
```
## Props
Name  | Type   | Description            | Default
----- | :----: | ---------------------- | -------
title | String | Titre de la facture    | —

### Import local

```vue
<script setup>
import { Title } from 'v-invoice'
</script>

<template>
  <Title :title="title" />
  <!-- fournissez la variable title -->
</template>
```