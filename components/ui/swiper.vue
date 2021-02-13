<template lang="pug">
.swiper
  client-only
    swiper(:options="swiperOption")
      swiper-slide.swiper-content(v-for="item in items")
        .product-top
          a(:href="item.link")
            .product-title
              .product-number {{ item.number }}
              .product-text {{ item.title }}
            .product-main
              .product-main-img(:style="{ backgroundImage: `url(${item.img.url})` }")
    .swiper-buttons
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
  margin-top: 72px

.swiper-content
  display: block

/* スライドのタイトル */
.product-top
  max-width: 880px
  width: 80%
  margin: 0 auto

.product-title
  display: flex
  justify-content: flex-start
  align-items: center

.product-number
  font-size: 600%
  line-height: 1
  +sp-view
    font-size: 380%
    margin: 0 12% 0 0

.product-text
  font-size: 360%
  margin-left: 32px
  +pc-md-view
    font-size: 200%

/* スワイパー画像 */
.product-main
  margin: 24px auto
  border: 10px solid #111
  border-radius: 8px
  z-index: 20

.product-main-img
  height: 0
  padding-top: 70.83%
  background-size: cover
  background-position: center center
  background-repeat: no-repeat

/* スワイパーのボタン */
.swiper-buttons
  position: absolute
  bottom: 28px
  right: 0
  left: 50%
  transform: translateX(-50%)
  display: flex
  justify-content: space-between
  max-width: 1052px
  width: calc(80% + 48px)
  height: 44px
  z-index: 1

.swiper-button-prev, .swiper-button-next
  width: 44px
  height: 100%
  border-radius: 50%
  border: 1px solid #ffffff
  background-image: none
  &:hover
    transition: 1s
    background-color: #ffffff
  &:focus
    outline: 0

.prev-round, .next-round
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
