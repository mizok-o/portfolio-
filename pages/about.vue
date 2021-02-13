<template lang="pug">
.about__container
  pheader
  .about__content
    aboutmain
    abouttext
    .about__skills
    sns
</template>
<script>
import pheader from '~/components/layout/pheader.vue'
import aboutmain from '~/components/about/about-main.vue'
import abouttext from '~/components/about/about-text.vue'
import sns from '~/components/ui/sns.vue'
export default {
  components: {
    pheader,
    aboutmain,
    abouttext,
    sns
  },
  head: {
    bodyAttrs: {
      class: 'content-about'
    }
  }
}
</script>
<style lang="sass">
.about__container
  margin: 128px auto
  max-width: 1080px
  width: 100%
  height: 100%
  +pc-sm-view
    margin: 104px auto 32px
  +sp-view
    margin: 72px auto 24px

.about__content
  max-width: 720px
  width: 80%
  margin: 0 auto
</style>
