<template>
  <div>
    {{content}}
  </div>
</template>
<script>
export default {
  props: ['content'],
  data: function () {
    return {
      content: 'test 1'
    }
  }
}
</script>

