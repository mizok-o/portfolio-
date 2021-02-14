<template lang="pug">
.TheRight
  .TheRight_Background(ref='background')
    .TheRight_Title(ref='title')
      | TheLeft Component
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import {TweenMax, Expo} from 'gsap'
export default {
computed: {
  ...mapGetters({
    entered: 'entered'
  })
},
watch: {
  async entered (val) {
    await this.$delay(1000)
    this.flash()
    val ? this.enter() : this.leave()
  }
},
methods: {
  flash () {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.title, 0.05, {
        color: 'green',
        scale: 1.3,
        ease: Expo.easeIn,
        repeat: 19,
        yoyo: true
      })
    })
  },
  enter () {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.background, 1, {
        scaleY: 1,
        ease: Expo.easeOut
      })
    })
  },
  leave () {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.background, 1, {
        scaleY: 0,
        ease: Expo.easeOut
      })
    })
  }
}
}
</script>
<style lang="sass">
.TheRight
  position: relative
  width: 28%
  height: 200px
.TheRight_Background
  width: 100%
  height: 100%
  background: #0f0f0f
  transform: scale(0)
  transform-origin: top center
.TheRight_Title
  position: absolute
  top: 0
  left: 0
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
  font-size: 15px


</style>
