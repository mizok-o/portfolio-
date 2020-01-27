<template lang="pug">
.container
   pheader
   logo
</template>

<script lang='coffee'>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'

export default {
  components: {
      Logo,
      pheader
  }
}
</script>
<style lang="sass">
</style>
