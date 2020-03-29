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
            .main-text {{ item.subtext }}
      .swiper-button-prev
        .prev.u-pc-view
        img.menu-bar(src="~/assets/img/button_swiper/prev.svg")
      .swiper-button-next
        .prev.u-pc-view
        img.menu-bar(src="~/assets/img/button_swiper/next.svg")
      <!-- .swiper-scrollbar -->
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
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          //   draggable: true,
          // },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          750: {
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
    );
    return {
      items: data.contents
    };
  }
}

</script>
<style lang="sass">

.index
  font-family: 'ITC Galliard Pro'
  +sp-view
    position: relative
    overflow-x: hidden

/* ワークス全体 */
.works
  position: relative
  width: 100%

/* 自動再生currentワークス */
.works-title
  width: 3052px
  +sp-view
    margin-left: -240px
    width: 960px
.auto-animation
  animation: automove 12s linear infinite
  display: flex
  width: 100%
.main-title
  width: 960px
  +sp-view
    /* margin-top: 3% */
    width: 480px

/* 全体 */
.swiper-container
  display: flex
  justify-content: flex-start
  padding: 0 0 7% 12%
  +sp-view
    padding-left: 0%
    margin: 12% 0 0 0

.swiper-content
  margin-right: 4%

/* スライドのタイトル */
.product-top
  display: flex
  justify-content: flex-start
  align-items: baseline
  margin: 16% 0 4% 0
  +sp-view
    margin: 6% 0 6% 0
  .product-title
    font-size: 260%
    margin-left: 1%
    +pc-md-view
      font-size: 200%
    +sp-view
      font-size: 180%
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
  +sp-view
    display: block
.product-main-link
  width: 72%
  +sp-view
    width: 88%
.product-main-img
  width: 100%

/* 画像横のテキスト */
.main-text
  position: absolute
  right: -32%
  bottom: -48%
  width: 56%
  height: 50%
  font-size: 100%
  letter-spacing: 1.6px
  transform: rotate(-90deg)
  transform-origin: top left
  +pc-md-view
    font-size: 18px
  +sp-view
    position: static
    width: 100%
    transform: none
    margin: 4% 4% 0 0
    font-size: 12px

/* スワイパーのボタン */
.swiper-button-prev, .swiper-button-next
  position: absolute
  top: 86.5%
  left: 0
  width: 72px
  height: 72px
  &:hover
    .menu-bar
      opacity: 1
  +pc-md-view
    width: 44px
    height: 44px
    background-size: 40% 40%
  +sp-view
    top: 104%
    width: 36px
    height: 36px
    background-size: 40% 40%
  &:focus
    outline: 0
.swiper-button-prev
  left: 7.4%
  background-image: none
  +sp-view
    left: 60%
.swiper-button-next
  left: 12.6%
  background-image: none
  +sp-view
    left: 78%
  .menu-bar
    left: 40%

.prev
  position: relative
  overflow: hidden
  width: 50%
  height: 50%
  background-color: #de101b
  border-radius: 50%
  margin: 25%
  transition: all .4s cubic-bezier(0.215, 0.61, 0.355, 1)
  +sp-view
    width: 80%
    height: 80%
    background-color: #fafafa
    margin: 10%

.menu-bar
  position: absolute
  top: 40%
  left: 40%
  width: 20%
  height: 20%
  opacity: .8
  transition: all .4s cubic-bezier(0.215, 0.61, 0.355, 1)
  +sp-view
    top: 18%
    left: 18%
    width: 64%
    height: 64%

.swiper-scrollbar
  position: absolute
  bottom: 8%
  left: 8%
  width: 12%
  height: 1px
  background-color: #8e101b
  +sp-view
    bottom: -5%
    left: 9%
    width: 72px
.swiper-scrollbar-drag
  background: rgba(256, 256, 256, .8)

/* .index-sns
  margin-right: 18% */

@keyframes automove
  0%
    transform: translate(-50%)
  100%
    transform: translate(0%)
</style>
