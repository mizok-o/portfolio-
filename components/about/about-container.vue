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
.about-container
  position: absolute
  top: 0
  left: 0
  width: 76%
  height: auto
  margin: 12% 12% 0 12%
.about-content
  display: flex
  width: 100%
  justify-content: space-between
.about-description
  width: 48%
.about-visual
  width: 50%
</style>
