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
    client-only
      swiper(:options="swiperOption")
        swiper-slide.swiper-content(v-for="item in items")
          .product-top
            .product-number {{ item.number }}
            .product-title {{ item.title }}
          .product-main
            a.product-main-link(v-bind:href="item.link")
              img.product-main-img(v-bind:src="item.img.url")
      .swiper-button-prev
        .prev-round
          .prev-icon
      .swiper-button-next
        .next-round
          .next-icon
  .index-sns.u-sp-view
    sns
</template>
<script>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
import Sns from '~/components/ui/Sns.vue'
import axios from "axios"
export default {
  components: {
    Logo,
    pheader,
    Sns
  },
  head: {
    bodyAttrs: {
      "class": 'content-index'
    }
  },
  name: 'carrousel',
    data() {
      return {
        swiperOption: {
          slidesPerView: 1.15,
          spaceBetween: 64,
          paginationClickable: true,
          speed: 800,
          centeredSlides: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          751: {
            slidesPerView: 1.2,
            spaceBetween: 24
          }
        }
      },
        items: []
      }
    },
    async asyncData() {
    const { data } = await axios.get(
      "https://kotaro.microcms.io/api/v1/news",
      {
        headers: { "X-API-KEY": "daf4248f-d2d5-4cc7-9279-0fde55724490" }
      }
    )
    return {
      items: data.contents
    }
  },
  methods: {
    handleScroll: function(evt, el) {
      let rect = this.$el.getBoundingClientRect();
      console.log(window.scrollY);
      console.log(window.pageYOffset);
      if (window.scrollY > 296) {
        this.swiper = true
      }else if (window.scrollY< 296){
        this.swiper = false
      }
    }
  }
}
</script>
<style lang="sass">
.index
  font-family: 'ITC Galliard Pro'
  padding: 3% 5% 0
  +sp-view
    overflow-x: hidden
.works
  position: relative
.works-title
  width: 3052px
  +sp-view
    margin-left: -240px
    width: 960px
.auto-animation
  animation: automove 16s linear infinite
  display: flex
  +sp-view
    animation-duration: 12s
.main-title
  width: 960px
  +sp-view
    width: 480px

/* 全体 */
.swiper-container
  display: flex
  justify-content: flex-start
  padding: 0 0 7% 12%
  +pc-sm-view
    padding-bottom: 10%
  +sp-view
    padding: 0 0 7% 0
    margin: 12% 0 0 0

.swiper-content
  margin-right: 4%

/* スライドのタイトル */
.product-top
  display: flex
  justify-content: flex-start
  align-items: baseline
  margin: 12% 0 4% 0
  +sp-view
    margin: 6% 0 6% 0
  .product-title
    font-size: 260%
    margin-left: 1%
    +pc-md-view
      font-size: 200%

/* スライドの番号 */
.product-number
  font-size: 600%
  margin: 0 14% 0 -13%
  +sp-view
    font-size: 380%
    margin: 0 12% 0 0

/* スワイパー画像 */
.product-main
  position: relative
  display: flex
  z-index: 23
  margin-left: 4%
  +pc-sm-view
    display: block
    margin-right: 16%
  +sp-view
    display: block
    margin-right: 0

.product-main-link
  width: 72%
  +sp-view
    width: 88%

.product-main-img
  width: 100%

.main-text
  position: absolute
  right: 0
  bottom: 0%
  letter-spacing: 1.6px
  /* transform: rotate(-90deg) */
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
.swiper-button-prev, .swiper-button-next
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
    left: 60%

.swiper-button-next
  left: 12.6%
  background-image: none
  +pc-sm-view
    left: 77%
  +sp-view
    left: 78%
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
