<template lang="pug">
  .about-container
    .about-content
      .about-top
        aboutmain
      .about-description
        aboutmaintext
        .about-detail
          abouttext
          .about-contact
            aboutlogo
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
    margin: 14% 0 4%

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
    width: 100%
    height: 64%
    top: 32%
    right: 16%
    margin-left: 0

.about-detail
  display: flex
  margin: 8% 9% 0
  justify-content: space-between
  +pc-md-view
    margin: 8% 0 0
  +pc-sm-view
    margin: 56px 4% 0
  +sp-view
    display: block

.about-contact
  display: flex
  flex-flow: column
  justify-content: space-between


</style>
