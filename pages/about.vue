<template lang="pug">
.container
   pheader
   logo
   aboutcontainer
</template>

<script lang='coffee'>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
import Sns from '~/components/ui/Sns.vue'
import aboutcontainer from '~/components/about/about-container.vue'

export default {
  components: {
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
  overflow: hidden
  position: fixed
  width: 100%
  height: auto
</style>
