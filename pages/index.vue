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
            delay: 4000,
            disableOnInteraction: false
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
            image: require('~/assets/img/dribbble_01.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts aaa',
            text: 'mitarashi This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_02.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts bbb',
            text: 'kinako This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_03.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_04.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_05.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_06.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_06.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_08.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_09.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_10.jpg'),
            url: 'dribbble.com'
          },
          {
            title: 'Happy Donuts',
            text: 'This is an original design made by me on dribbble.',
            image: require('~/assets/img/dribbble_11.jpg'),
            url: 'dribbble.com'
          },
        ]
      }
    }
}

</script>

<style lang="sass">
.works
  width: 100%
  height: auto
/* 自動アニメーション */
.works-title
  margin: 0 0 0 -16%
  width: 216%
.auto-animation
  animation: automove 5s linear infinite
  display: flex
  width: 100%
.main-title
  width: 760px
  &:last-child
    margin-right: 0
/* ワークスリスト */
.swiper-container
  display: flex
  justify-content: flex-start
  height: auto
  padding: 0 0 10% 16%
  overflow: none
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
  top: 88%
  left: 0
  margin: 0
  width: 4%
  height: 3%
  background-size: 34px 34px
  &:focus
    outline: 0
.swiper-button-prev
  left: 4%
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.460938 10.335938 C21.023440 9.820310 21.035159 9.304690 20.496094 8.789062 C19.957029 8.273435 19.429690 8.273435 18.914062 8.789062 L11.601562 16.101562 C11.367186 16.289063 11.250000 16.546873 11.250000 16.875000 C11.250000 17.203127 11.367186 17.460937 11.601562 17.648438 L18.914062 24.960938 C19.429690 25.476565 19.945310 25.476565 20.460938 24.960938 C20.695314 24.726561 20.812500 24.457033 20.812500 24.152344 C20.812500 23.847655 20.695314 23.601563 20.460938 23.414062 L13.992188 16.875000 Z M28.757812 4.992188 C25.476546 1.664046 21.515648 -0.000000 16.875000 -0.000000 C12.234352 -0.000000 8.261735 1.652327 4.957031 4.957031 C1.652327 8.261735 0.000000 12.234352 0.000000 16.875000 C0.000000 21.515648 1.652327 25.488265 4.957031 28.792969 C8.261735 32.097673 12.234352 33.750000 16.875000 33.750000 C21.515648 33.750000 25.488265 32.097673 28.792969 28.792969 C32.097673 25.488265 33.750000 21.515648 33.750000 16.875000 C33.750000 12.234352 32.085954 8.273454 28.757812 4.992188 Z M27.210938 27.210938 C24.351548 30.070327 20.906270 31.500000 16.875000 31.500000 C12.843730 31.500000 9.398452 30.070327 6.539062 27.210938 C3.679673 24.351548 2.250000 20.906270 2.250000 16.875000 C2.250000 12.843730 3.679673 9.398452 6.539062 6.539062 C9.398452 3.679673 12.843730 2.250000 16.875000 2.250000 C20.906270 2.250000 24.351548 3.679673 27.210938 6.539062 C30.070327 9.398452 31.500000 12.843730 31.500000 16.875000 C31.500000 20.906270 30.070327 24.351548 27.210938 27.210938 Z M33.750000 31.500000' style='fill:white'/%3E%3C/svg%3E")
.swiper-button-next
  left: 12%
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.007812 15.960938 L14.695312 8.648438 C14.179685 8.132810 13.652346 8.132810 13.113281 8.648438 C12.574216 9.164065 12.585935 9.679685 13.148438 10.195312 L19.617188 16.734375 L13.148438 23.273438 C12.585935 23.789065 12.574216 24.304685 13.113281 24.820312 C13.652346 25.335940 14.179685 25.335940 14.695312 24.820312 L22.007812 17.507812 C22.242189 17.320312 22.359375 17.062502 22.359375 16.734375 C22.359375 16.406248 22.242189 16.148438 22.007812 15.960938 Z M28.687500 4.921875 C25.406234 1.640609 21.445336 -0.000000 16.804688 -0.000000 C12.164039 -0.000000 8.203141 1.640609 4.921875 4.921875 C1.640609 8.203141 0.000000 12.164039 0.000000 16.804688 C0.000000 21.445336 1.640609 25.406234 4.921875 28.687500 C8.203141 31.968766 12.164039 33.609375 16.804688 33.609375 C21.445336 33.609375 25.406234 31.968766 28.687500 28.687500 C31.968766 25.406234 33.609375 21.445336 33.609375 16.804688 C33.609375 12.164039 31.968766 8.203141 28.687500 4.921875 Z M27.070312 27.140625 C24.257798 29.953139 20.847676 31.359375 16.839844 31.359375 C12.832011 31.359375 9.398452 29.941420 6.539062 27.105469 C3.679673 24.269517 2.250000 20.847676 2.250000 16.839844 C2.250000 12.832011 3.679673 9.398452 6.539062 6.539062 C9.398452 3.679673 12.832011 2.250000 16.839844 2.250000 C20.847676 2.250000 24.269517 3.679673 27.105469 6.539062 C29.941420 9.398452 31.359375 12.832011 31.359375 16.839844 C31.359375 20.847676 29.929702 24.281236 27.070312 27.140625 Z M33.609375 31.359375' style='fill:white'/%3E%3C/svg%3E")
@keyframes automove
  0%
    transform: translate(0%)
  100%
    transform: translate(-50%)
</style>
