<template lang="pug" class=".index">
.index
  maincursor
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
      .swiper-button-prev
      .swiper-button-next
    .index-sns.u-sp-view
      sns
</template>
<script>
import maincursor from '~/components/ui/main-cursor.vue'
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
import Sns from '~/components/ui/Sns.vue'
export default {
  components: {
    maincursor,
    Logo,
    pheader,
    Sns
  },
  head: {
    bodyAttrs: {
      "class": 'content-index fadeout'
    }
  },
  name: 'carrousel',
    data() {
      return {
        swiperOption: {
          slidesPerView: 1.14,
          spaceBetween: 16,
          paginationClickable: true,
          speed: 500,
          centeredSlides: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay: {
            delay: 4500,
            disableOnInteraction: false
          },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
        },
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
/* カーソル遅延 */

/* ワークス全体 */
.works
  position: relative
  width: 100%
  +sp-view

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

/* スワイパー */

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
  width: 68%
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
  top: 82%
  left: 0
  width: 72px
  height: 72px
  background-size: 24% 24%
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
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.84375 5.90625L0 6.75L6.75 13.5L7.59375 12.6562L1.6875 6.75L7.59375 0.84375L6.75 0L3.375 3.375L0.84375 5.90625Z' fill='white'/%3E%3C/svg%3E")
  +sp-view
    left: 62%
.swiper-button-next
  left: 9%
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.82031 7.59375L7.66406 6.75L0.84375 0L0 0.84375L5.90625 6.75L0 12.6562L0.84375 13.5L4.28906 10.125L6.82031 7.59375Z' fill='white'/%3E%3C/svg%3E")
  +sp-view
    left: 76%

@keyframes automove
  0%
    transform: translate(-50%)
  100%
    transform: translate(0%)
</style>
