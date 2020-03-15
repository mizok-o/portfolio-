<template lang="pug">
  .about-container
    .about-content
      .about-visual
        aboutimage
      .about-description
        abouttitle
        abouttext
    Sns
</template>
<script>
import abouttitle from '~/components/about/about-title.vue'
import abouttext from '~/components/about/about-text.vue'
import aboutimage from '~/components/about/about-image.vue'
import Sns from '~/components/ui/Sns.vue'
export default{
  components: {
    abouttitle,
    abouttext,
    aboutimage,
    Sns
  }
}
</script>
<style lang="sass">

/* 全体 */
.about-container
  position: absolute
  top: 88%
  left: 0
  height: 100%

/* 横並びさせる */
.about-content
  position: relative
  overflow: hidden
  width: 100vw
  height: 100%
  font-family: 'Gill Sans'
  +pc-md-view
    display: block
  +sp-view
    margin: 14% 0 8%

/* 画像 */
.about-visual
  position: absolute
  top: 0
  right: 0
  margin: 10% 0 0 2%
  width: 96%
  height: 100%
  +sp-view
    margin: 0 0 0 0
    height: 80%
    width: auto
    left: -24%
.about-description
  position: absolute
  bottom: 0
  right: 6%
  background: linear-gradient(-60deg, rgba(200, 0, 0, .2), rgba(0, 0, 0, 0))
  width: 36%
  height: 84%
  +sp-view
    width: 64%
    height: 64%
    top: 32%
    right: 16%
</style>
