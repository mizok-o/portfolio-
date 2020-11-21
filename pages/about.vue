<template lang="pug">
.index
  Background
  .boxes
    Left
    Center
    Right
  Button

</template>
<script>
import Button from '~/components/praAbout/Button.vue'
import Left from '~/components/praAbout/Left.vue'
import Right from '~/components/praAbout/Right.vue'
import Center from '~/components/praAbout/Center.vue'
import Background from '~/components/praAbout/Background.vue'
export default {
  components: {
      Button,
      Center,
      Right,
      Left,
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
.index
  display: flex
  flex-wrap: wrap
  align-items: center
  align-content: center
  margin: 0 auto
  width: 100%
  height: 100%
.boxes
  display: flex
  justify-content: space-between
  margin: 0 auto
  width: 60%
  height: 200px
</style>
