<template lang="pug" class=".index">
.index
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
    swiper.product-list
      .swiper-container
        .swiper-wrapper
          .swiper-slide.product-item
            .product-title
              h3.title-text Happy Donuts
            .product-main
              img.main-img(src="../assets/img/donuts.jpg")
              .main-text
                .textarea
                  | This is an original design made by me on dribbble.
                .link-dribbble
                  a(href="dribbble.com") visit
          .swiper-slide.product-item
            .product-title
              h3.title-text Happy Donuts
            .product-main
              img.product-img(src="../assets/img/donuts.jpg")
              .text
                p.text-area
                  | This is an original design made by me on dribbble.
                .link-area
                  a.link-dribbble(href="dribbble.com") visit
        .swiper-pagination
        .swiper-button-prev
        .swiper-button-next
</template>

<script lang='coffee'>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
export default {
  components: {
      Logo,
      pheader
  },
  head: {
    bodyAttrs: {
      class: 'content-index'
    }
  }
}
</script>

<style lang="sass">
.works
  margin: 0 0 0 16%
.works-title
  margin: 0 0 0 -40%
  width: 100%
.auto-animation
  animation: automove 5s linear infinite
  display: flex
.main-title
  width: 760px
  &:last-child
    margin-right: 0
/* ワークスリスト */
.product-list
  display: flex
  justify-content: flex-start
  height: auto
  /* width: 200% */

.product-item
  /* width: 84vw */
.product-title
  display: flex
  justify-content: flex-start
  align-items: baseline
  /* margin: 4% 0 2% 0 */
  .title-text
    font-size: 48px
    width: 100%
    &::before
      content: "01"
      color: #fafafa
      font-size: 88px
      padding-right: 4%

.product-main
  position: relative
  display: flex
  width: 40vw
  margin: 0 0 4% 0

.main-img
  width: 720px
  height: auto
.main-text
  position: absolute
  right: -50%
  bottom: -60%
  width: 36%
  height: 60%
  transform: rotate(-90deg)
  transform-origin: top left

.link-dribbble
  display: block
  position: relative
  &::before
    content: ""
    position: absolute
    top: 50%
    bottom: 50%
    left: 0
    height: 1px
    width: 24px
    background-color: #fafafa
    /* スワイパーのやつ */
.c-container
  position: relative
  margin-left: auto
  margin-right: auto
  max-width: 1000px
  padding: 0 15px
@keyframes automove
  0%
    transform: translate(0%)
  100%
    transform: translate(-50%)
</style>
