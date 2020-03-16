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
        swiper-slide.product-item(v-for="(product, index) in products" :key="product.id")
          .product-title
            .product-number(v-if="index <= 8") 0{{index + 1}}
            .product-number(v-else) {{index + 1}}
            h3.title-text {{product.title}}
          .product-main
            a.main-link(:href="product.url" ,target="_blank")
              img.main-img(:src="product.image")
            .main-text
              .textarea {{product.text}}
              .link-dribbble
                a(:href="product.url", target="_blank") visit
      .swiper-button-prev(v-bind:class="{ active: isActive }")
        .prev
        img.menu-bar(src="~/assets/img/button_swiper/prev.svg")
      .swiper-button-next(v-bind:class="{ active: isActive }")
        .prev
        img.menu-bar(src="~/assets/img/button_swiper/next.svg")
      .swiper-scrollbar
    .index-sns.u-sp-view
      sns
</template>
<script>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
import Sns from '~/components/ui/Sns.vue'
export default {
  components: {
    Logo,
    pheader,
    Sns
  },
  head: {
    bodyAttrs: {
      "class": 'content-index main-cursor'
    }
  },
  name: 'carrousel',
    data() {
      return {
        swiperOption: {
          slidesPerView: 1.15,
          spaceBetween: 12,
          paginationClickable: true,
          speed: 800,
          centeredSlides: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
        },
        isActive: true,
        products: [
          {
            title: 'An artist Ariana',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_001.jpg'),
            url: 'https://dribbble.com/shots/8973871-Promote-an-artist'
          },
          {
            title: 'Pineapple',
            text: 'mitarashi This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_002.jpg'),
            url: 'https://dribbble.com/shots/9838973-pineapple'
          },
          {
            title: 'Panpkin soup',
            text: 'kinako This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_003.jpg'),
            url: 'https://dribbble.com/shots/7635966-2'
          },
          {
            title: 'Pianist',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_004.jpg'),
            url: 'https://dribbble.com/shots/7780934-2019-10-24'
          },
          {
            title: 'Sky blue coat',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_005.jpg'),
            url: 'https://dribbble.com/shots/7579708-Sky-blue'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_006.jpg'),
            url: 'https://dribbble.com/shots/8801512-Happy-Donuts'
          },
          {
            title: 'Vietnam',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_007.jpg'),
            url: 'https://dribbble.com/shots/8562682-Viet-nam'
          },
          {
            title: 'Pens',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_008.jpg'),
            url: "https://zxcvbnmnbvcxz.com/"
          },
          {
            title: 'An artist Ariana',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_001.jpg'),
            url: "https://dribbble.com/shots/8973871-Promote-an-artist"
          },
          {
            title: 'Cosmetic brand',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_010.jpg'),
            url: 'https://dribbble.com/shots/8760547-women-s-brand'
          },
          {
            title: 'La Bella',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_011.jpg'),
            url: "https://zxcvbnmnbvcxz.com/"
          },
          {
            title: 'Mountain',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_012.jpg'),
            url: 'https://dribbble.com/shots/8568625-Mt-Hida'
          },
          {
            title: 'The third place',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble/dribbble_013.jpg'),
            url: 'https://dribbble.com/shots/7861592-Third-place'
          },
        ]
      }
    }
}
</script>
<style lang="sass">

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
    margin-top: 3%
    width: 480px

/* 全体 */
.swiper-container
  display: flex
  justify-content: flex-start
  padding: 0 0 7% 10%
  +sp-view
    padding-left: 0%

/* スライドのタイトル */
.product-title
  display: flex
  justify-content: flex-start
  align-items: baseline
  margin: 6% 0 2% 0
  .title-text
    font-size: 240%
    +sp-view
      font-size: 180%
/* スライドの番号 */
.product-number
  font-size: 600%
  margin: 0 14% 0 -12%
  +sp-view
    font-size: 380%
    margin: 0 4% 0 0

/* スワイパー画像 */
.product-main
  position: relative
  display: flex
  z-index: 23
  +sp-view
    display: block
.main-link
  width: 72%
  +sp-view
    width: 88%
.main-img
  width: 88%

/* 画像横のテキスト */
.main-text
  position: absolute
  right: 2%
  bottom: -48%
  width: 32%
  height: 50%
  transform: rotate(-90deg)
  transform-origin: top left
  +sp-view
    position: static
    width: 64%
    transform: none
    margin: 4% 0 0 0

/* visitリンク */
.link-dribbble
  display: block
  position: relative
  letter-spacing: 3px
  font-size: 120%
  margin: 2% 0 0 1%
  &::before
    content: ""
    position: absolute
    top: 60%
    bottom: 0
    left: 0
    height: 1px
    width: 10%
    background-color: #fafafa
    transform: scale(0)
    transform-origin: left
    transition: transform 0.6s cubic-bezier(0.3, 0.575, 0.565, 1)
    +sp-view
      display: none
  &:hover::before
    transform: scale(1)
    transform-origin: left

/* スワイパーのボタン */
.swiper-button-prev, .swiper-button-next
  position: absolute
  top: 85%
  left: 0
  width: 72px
  height: 72px
  &:hover
    .prev
      opacity: 0
    .menu-bar
      opacity: 1
  +pc-md-view
    width: 44px
    height: 44px
    background-size: 40% 40%
  +sp-view
    top: 85%
    background-size: 24% 24%
  &:focus
    outline: 0
.swiper-button-prev
  left: 3%
  background-image: none
  +sp-view
    left: 62%
.swiper-button-next
  left: 8%
  background-image: none
  +sp-view
    left: 76%

.prev
  position: relative
  overflow: hidden
  width: 24%
  height: 24%
  background-color: #fafafa
  border-radius: 50%
  margin: 38%
  transition: all .4s cubic-bezier(0.215, 0.61, 0.355, 1)

.menu-bar
  position: absolute
  top: 25%
  left: 25%
  width: 50%
  height: 50%
  opacity: 0
  transition: all .4s cubic-bezier(0.215, 0.61, 0.355, 1)



.swiper-scrollbar
  position: absolute
  bottom: 4%
  left: 5%
  width: 11%
  height: 1px
  background-color: #af0000

.swiper-scrollbar-drag
  background: rgba(256, 256, 256, .8)

.index-sns
  margin-right: 18%

@keyframes automove
  0%
    transform: translate(-50%)
  100%
    transform: translate(0%)
</style>
