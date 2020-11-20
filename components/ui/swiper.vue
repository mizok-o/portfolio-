<template lang="pug">
.swiper
  client-only
    swiper(:options="swiperOption")
      swiper-slide.swiper-content(v-for="item in items")
        .product-top
          .product-number {{ item.number }}
          .product-title {{ item.title }}
        .product-main
          a.product-main-link(:href="item.link")
            .product-main-img(:style="{ backgroundImage: `url(${item.img.url})` }")
    .swiper-nav
      .swiper-button-prev
        .prev-icon
      .swiper-button-next
        .next-icon
</template>
<script>
import axios from "axios"
export default {
  props: ['items'],
  data() {
    return {
      swiperOption: {
        paginationClickable: true,
        speed: 800,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
      }
    }
  }
}
</script>

<style lang="sass">
/* 全体 */
.swiper
  position: relative
  margin-top: 112px

.swiper-content
  display: block
  /* margin: 0 12% */

/* スライドのタイトル */
.product-top
  display: flex
  height: 96px
  justify-content: center
  align-items: center

.product-title
  font-size: 260%
  margin-left: 72px
  +pc-md-view
    font-size: 200%

/* スライドの番号 */
.product-number
  font-size: 600%
  +sp-view
    font-size: 380%
    margin: 0 12% 0 0

/* スワイパー画像 */
.product-main
  max-width: 880px
  width: 80%
  margin: 48px auto 48px
  border: 10px solid #111
  border-radius: 8px
  z-index: 20

.product-main-img
  height: 0
  padding-top: 70.83%
  background-size: cover
  background-position: center center
  background-repeat: no-repeat

//.main-text
  position: absolute
  right: 0
  bottom: 0%
  letter-spacing: 1.6px
  transform-origin: top left
  font-family: 'ff-meta-web-pro'
  font-weight: 600
  +pc-sm-view
    font-size: 16px
    transform: none
    position: static
    margin-top: 4%
  +sp-view
    width: 88%
    margin: 3% 4% 0 0
    font-size: 12px

/* スワイパーのボタン */
.swiper-nav
  position: absolute
  top: 50%
  bottom: 0
  left: 0
  right: 0
  width: 100%
  height: 44px

.swiper-button-prev, .swiper-button-next
  transform: translateY(-50%)
  width: 44px
  height: 44px
  border-radius: 50%
  border: 1px solid #ffffff
  background-image: none
  &:hover
    transition: 1s
    background-color: #ffffff
  &:focus
    outline: 0

.prev-round, .next-round
  position: relative
  overflow: hidden
  width: 100%
  height: 100%
  border-radius: 50%
  background-color: #de101b
  transition: all .6s cubic-bezier(0.61, 1, 0.78, 1)
  +sp-view
    width: 100%
    height: 100%
    background-color: #fafafa

@keyframes automove
  0%
    transform: translate(-50%)
  100%
    transform: translate(0%)

</style>
