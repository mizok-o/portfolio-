<template lang="pug">
  .about-container
    .about-content
      .about-top
        aboutmain
      .about-description
        aboutmaintext
        .about-detail
          abouttext
          aboutlogo
        .about-contact
          Sns
</template>
<script>
import aboutmaintext from '~/components/about/about-main-text.vue'
import abouttext from '~/components/about/about-text.vue'
import aboutmain from '~/components/about/about-main.vue'
import Sns from '~/components/ui/Sns.vue'
import aboutlogo from '~/components/about/about-logo.vue'
export default{
  components: {
    aboutmaintext,
    abouttext,
    aboutmain,
    Sns,
    aboutlogo
  }
}

</script>
<style lang="sass">

/* 全体 */
.about-container
  font-family: 'Meta Pro'
  height: 100%

/* 横並びさせる */
.about-content
  position: relative
  margin: 14% 16% 8%
  +pc-md-view
    display: block
  +sp-view
    margin: 18% 0 4%

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
  margin: 12% 2% 0
  width: 96%
  height: 72%
  +sp-view
    width: 100%
    top: 32%
    right: 16%
    margin: 16% 0 0 0

.about-detail
  position: relative
  display: flex
  margin: 14% 6% 0
  justify-content: space-between
  +pc-md-view
    margin: 8% 0 0
  +pc-sm-view
    margin: 56px 4% 0
  +sp-view
    margin: 48px 0 0
    display: block

.about-contact
  display: flex
  margin: 80px 6% 0
  +sp-view
    margin-top: 40px

</style>
