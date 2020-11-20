<template lang="pug">
.container
   Button
   Background
</template>
<script>
import Button from '~/components/praAbout/Button.vue'
import Background from '~/components/praAbout/Background.vue'
export default {
  components: {
      Button,
      Background
  },
  head: {
    bodyAttrs: {
      class: 'content-about'
    }
  }
}
</script>
<style lang="sass">
.container
  //padding: 3% 5% 0
  //height: 100vh
.content-about
  overflow-y: hidden
  +sp-view
    overflow: inherit
</style>
