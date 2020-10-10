<template>
  <Footer :content="config.footerContent"/>
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