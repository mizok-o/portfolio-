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
    //.swiper-button-prev
      .prev-round
        .prev-icon
    //.swiper-button-next
      .next-round
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
        },
        breakpoints: {
          751: {
          }
        }
      }
    }
  }
}
</script>

<style lang="sass">
/* 全体 */
.swiper
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
  +sp-view
    margin: 6% 0 6% 0

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
  margin: 48px auto 48px
  z-index: 20
  +pc-sm-view
    display: block
    margin-right: 16%
  +sp-view
    display: block
    margin-right: 0

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
//.swiper-button-prev, .swiper-button-next
  position: absolute
  top: 86.5%
  left: 0
  width: 44px
  height: 44px
  border-radius: 50%
  +pc-view
    &:hover
      .prev-round, .next-round
        background-color: #fafafa
      .prev-icon, .next-icon
        &::before, &::after
          background-color: #de101b
  +pc-sm-view
    top: 88%
  +sp-view
    top: 104%
    width: 36px
    height: 36px
  &:focus
    outline: 0

.swiper-button-prev
  left: 7.4%
  background-image: none
  +pc-sm-view
    left: 67%
  +sp-view
    left: 232px

.swiper-button-next
  left: 12.6%
  background-image: none
  +pc-sm-view
    left: 77%
  +sp-view
    left: 300px
  .menu-bar
    left: 40%

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

.prev-icon
  &::before
    content: ""
    transform-origin: left bottom
    transform: rotate(-40deg)
    position: absolute
    display: block
    top: 21px
    right: 12px
    height: 3px
    width: 16px
    background-color: #fafafa
    +sp-view
      background-color: #de101b
      height: 2px
      width: 12px
      top: 17px
      right: 11px
  &::after
    content: ""
    transform-origin: left bottom
    transform: rotate(40deg)
    position: absolute
    display: block
    bottom: 21px
    right: 14px
    height: 3px
    width: 16px
    background-color: #fafafa
    +sp-view
      background-color: #de101b
      height: 2px
      width: 12px
      bottom: 18px
      right: 12px

.next-icon
  &::before
    content: ""
    transform-origin: right bottom
    transform: rotate(40deg)
    position: absolute
    display: block
    top: 21px
    left: 13px
    height: 3px
    width: 16px
    background-color: #fafafa
    +sp-view
      background-color: #de101b
      height: 2px
      width: 12px
      top: 17px
      left: 11px
  &::after
    content: ""
    transform-origin: right bottom
    transform: rotate(-40deg)
    position: absolute
    display: block
    bottom: 21px
    left: 15px
    height: 3px
    width: 16px
    background-color: #fafafa
    +sp-view
      background-color: #de101b
      height: 2px
      width: 12px
      bottom: 18px
      left: 12px

@keyframes automove
  0%
    transform: translate(-50%)
  100%
    transform: translate(0%)

</style>
