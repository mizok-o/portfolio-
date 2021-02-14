<template lang="pug">
.index__container(:class="{'showContent': show}")
  pheader
  logo
  .works
    .works-title
      .auto-animation
        img.main-title(src="../assets/img/strow.svg")
        img.main-title(src="../assets/img/Current Works.svg")
        img.main-title(src="../assets/img/strow.svg")
        img.main-title(src="../assets/img/Current Works.svg")
        img.main-title(src="../assets/img/strow.svg")
        img.main-title(src="../assets/img/Current Works.svg")
    swiper(:items="items")
  .index-sns.u-sp-view
    sns
</template>
<script>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
import swiper from '~/components/ui/swiper.vue'
import sns from '~/components/ui/sns.vue'
import axios from "axios"
export default {
  components: {
    Logo,
    pheader,
    swiper,
    sns
  },
  head: {
    bodyAttrs: {
      "class": 'content-index'
    }
  },
  data(){
    return {
      show: false,
      items: []
    }
  },
  async asyncData() {
    const items = await axios.get(
      "https://kotaro.microcms.io/api/v1/news",
      {
        headers: { "X-API-KEY": "daf4248f-d2d5-4cc7-9279-0fde55724490" }
      }
    )
    return {
      items: items.data.contents
    }
  },
  mounted(){
    window:onload = () => {
      this.show = !this.show
    }
  }
}
</script>
<style lang="sass">
.index__container
  width: 100%
  -ms-overflow-style: none
  scrollbar-width: none

.showContent
  opacity: 1

.works
  margin-top: 160px
  +sp-view
    margin-top: 48px

.works-title
  width: 3052px
  +sp-view
    margin-left: -240px
    width: 960px

.auto-animation
  animation: automove 16s linear infinite
  display: flex
  +sp-view
    animation-duration: 8s
@keyframes automove
  0%
    transform: translate(-50%)
  100%
    transform: translate(-100%)

.main-title
  width: 960px
  +sp-view
    width: 480px
</style>
