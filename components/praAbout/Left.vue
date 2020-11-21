<template lang="pug">
.TheLeft
  .TheLeft_Background(ref='background')
    .TheLeft_Title(ref='title')
      | TheLeft Component
</template>
<script>
import {mapGetters} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'
export default {
  computed: {
    ...mapGetters({
      entered: 'entered'
    })
  },
  watch: {
    entered (val) {
      this.flash()
      val ? this.enter() : this.leave()
    }
  },
  methods: {
    flash () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.title, 0.05, {
          color: 'red',
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
          scaleX: 1,
          ease: Expo.easeOut
        })
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 1, {
          scaleX: 0,
          ease: Expo.easeOut
        })
      })
    }
  }
}
</script>
<style lang="sass">
.TheLeft
  position: relative
  width: 28%
  height: 200px
.TheLeft_Background
  width: 100%
  height: 100%
  background: #0f0f0f
  transform: scale(0)
  transform-origin: left center
.TheLeft_Title
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
