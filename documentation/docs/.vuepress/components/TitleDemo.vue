<template>
  <Title :title="config.title"/>
</template>

<script>
import data from '../data'
export default {
  data () {
    return {
      ...data
    }
  }
}
</script>