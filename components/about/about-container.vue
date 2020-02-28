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
  top: 0
  left: 0

/* 横並びさせる */
.about-content
  position: relative
  display: flex
  height: 100vh
  margin: 0 2% 0 0
  +pc-md-view
    display: block

/* 左側テキスト系 */
.about-description
  width: 54%
  background-color: #b00000
  margin: 12% 0 2%

/* 画像 */
.about-visual
  width: 64%
  margin: 4.5% 0 0 0
</style>
