<template lang="pug">
  .about-container
    .about-content
      .about-description
        abouttitle
        abouttext
      .about-visual
        aboutimage
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
  margin: 12% 12% 0 12%

/* 横並びさせる */
.about-content
  display: flex
  +pc-md-view
    display: block

/* 左側テキスト系 */
.about-description
  width: 48%

/* 画像 */
.about-visual, .about-description
  width: 100%
</style>
