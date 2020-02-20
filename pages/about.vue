<template lang="pug">
.container
   maincursor
   pheader
   logo
   aboutcontainer
</template>

<script>
import maincursor from '~/components/ui/main-cursor.vue'
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
import Sns from '~/components/ui/Sns.vue'
import aboutcontainer from '~/components/about/about-container.vue'

export default {
  components: {
      maincursor,
      Logo,
      pheader,
      Sns,
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
.content-about
  overflow-y: hidden
  +sp-view
    overflow: inherit
</style>
