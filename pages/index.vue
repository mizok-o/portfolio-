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
    swiper(:options="swiperOption" ref="mySwiper").product-list
      swiper-slide.product-item(v-for="(product, index) in products")
        .product-title
          .product-number(v-if="index <= 8") 0{{index + 1}}
          .product-number(v-else) {{index + 1}}
          h3.title-text {{product.title}}
        .product-main
          img.main-img(:src="product.image")
          .main-text
            .textarea {{product.text}}
            .link-dribbble
              a(:href="product.url") visit
    .swiper-button-prev
    .swiper-button-next
</template>

<script>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
export default {
  components: {
    Logo: Logo,
    pheader: pheader
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
          slidesPerView: 1.1,
          spaceBetween: 30,
          paginationClickable: true,
          centeredSlides: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay: {
            delay: 4000
          },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
        },
        products: [
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts aaa',
            text: 'mitarashi This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts bbb',
            text: 'kinako This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/donuts.jpg'),
            url: 'dribbble.com'
          },
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}

</script>

<style lang="sass">
.works
  /* padding: 0 0 0 16% */
  position: relative
  width: 100%
  height: auto
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
  padding: 0 0 10% 16%

.product-item
  width: 100%
  margin: 0
.product-title
  display: flex
  justify-content: flex-start
  align-items: baseline
  margin: 4% 0 2% 0
  .title-text
    font-size: 48px
    width: 100%
.product-number
  font-size: 80px
  margin: 0 10% 0 -8%
.product-main
  position: relative
  display: flex
  width: 100%

.main-img
  width: 68%
  height: auto
.main-text
  position: absolute
  right: -2%
  bottom: -50%
  width: 32%
  height: 50%
  transform: rotate(-90deg)
  transform-origin: top left

.link-dribbble
  display: block
  position: relative
  letter-spacing: 3
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
  &:hover::before
    transform: scale(1)
    transform-origin: left
    /* スワイパーのやつ */
.swiper-button-prev, .swiper-button-next
  position: absolute
  top: 80%
.swiper-button-prev
  left: 4%
.swiper-button-next
  left: 12%
@keyframes automove
  0%
    transform: translate(0%)
  100%
    transform: translate(-50%)
</style>
