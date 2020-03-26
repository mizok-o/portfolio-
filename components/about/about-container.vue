<template lang="pug">
  .about-container
    .about-content
      .about-top
        aboutimage
      .about-description
        abouttitle
        .about-detail
          abouttext
          .about-contact
            aboutlogo
            Sns
</template>
<script>
import abouttitle from '~/components/about/about-title.vue'
import abouttext from '~/components/about/about-text.vue'
import aboutimage from '~/components/about/about-image.vue'
import Sns from '~/components/ui/Sns.vue'
import aboutlogo from '~/components/ui/about-logo.vue'
export default{
  components: {
    abouttitle,
    abouttext,
    aboutimage,
    Sns,
    aboutlogo
  }
}
</script>
<style lang="sass">

/* 全体 */
.about-container
  height: 100%

/* 横並びさせる */
.about-content
  position: relative
  margin: 14% 16% 8%
  +pc-md-view
    display: block
  +sp-view
    margin: 14% 0 8%

/* 画像 */
.about-top
  width: 100%
  height: 100%
  +sp-view
    margin: 0 0 0 0
    height: 80%
    width: auto
    left: -24%
.about-description
  margin: 12% 0 0 2%
  width: 100%
  height: 72%
  +sp-view
    width: 64%
    height: 64%
    top: 32%
    right: 16%

.about-detail
  display: flex
  margin: 8% 9% 0

.about-contact
  display: flex
  flex-flow: column
  justify-content: space-between
  margin: 0 0 0 40%
</style>
