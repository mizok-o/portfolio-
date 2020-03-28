<template lang="pug">
.container
   pheader
   aboutcontainer
</template>
<script>
import pheader from '~/components/layout/pheader.vue'
import Logo from '~/components/ui/Logo.vue'
import aboutcontainer from '~/components/about/about-container.vue'
export default {
  components: {
      pheader,
      Logo,
      aboutcontainer
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
  height: 100vh
.content-about
  overflow-y: hidden
  +sp-view
    overflow: inherit
</style>
