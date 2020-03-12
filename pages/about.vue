<template lang="pug">
.container
   maincursor
   pheader
   logo
   aboutcontainer
</template>
<script>
import maincursor from '~/components/ui/main-cursor.vue'
import pheader from '~/components/layout/pheader.vue'
import Logo from '~/components/ui/Logo.vue'
import aboutcontainer from '~/components/about/about-container.vue'
export default {
  components: {
      pheader,
      Logo,
      aboutcontainer,
      maincursor
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
