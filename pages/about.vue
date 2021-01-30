<template lang="pug">
.index
  .line-container
    .line1
    .line2
    .line3
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: 'content-about'
    }
  }
}
</script>
<style lang="sass">
.index
  display: flex
  flex-wrap: wrap
  align-items: center
  align-content: center
  margin: 0 auto
  width: 100%
  height: 100%

.line-container
  position: relative
  width: 100%
  background-color: #ffffff
.line1
.line2
.line3

</style>
