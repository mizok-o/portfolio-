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
  margin: 0 1.75% 0
  +pc-md-view
    display: block

/* 左側テキスト系 */
.about-description
  width: 50%
  background-color: #aa0000
  margin: 1.75% 0 1.75%

/* 画像 */
.about-visual
  width: 50%
  margin: 1.75% 0 1.75%
</style>
