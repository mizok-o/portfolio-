<template lang="pug">
.index
  pheader
  logo
  .works
    .works-title
      img.main-title(src="../assets/img/Current Works.svg")
      img.main-title(src="../assets/img/strow.svg")
    ul.product-list
      li.product-content
        .product-title
          h3.product-number 01
          h4.title-text Happy Donuts
        .product-item
          img.product-img(src="../assets/img/donuts.jpg")
          .text
            .textarea
              | This is an original design made by me on dribbble.
            .link-dribbble
              a(href="dribbble.com") visit
      li.product-content
        .product-title
          h3.product-number 01
          h4.title-text Happy Donuts
        .product-item
          img.product-img(src="../assets/img/donuts.jpg")
          .text
            .textarea
              | This is an original design made by me on dribbble.
            .link-dribbble
              a(href="dribbble.com") visit
</template>

<script lang='coffee'>
import Logo from '~/components/ui/Logo.vue'
import pheader from '~/components/layout/pheader.vue'
export default {
  components: {
      Logo,
      pheader
  }}
</script>

<style lang="sass">
  logo
    position: relative

  .works
    margin: 24% 0 0 11%
  .works-title
    display: flex
    animation: automove 4s linear infinite
  .main-title
    font-size: 96px
    &:nth-child(1)
      padding: 0 24px 0 400px

  .product-list
    width: 12000px
    display: flex
    justify-content: flex-start

  .product-content
  .product-title
    display: flex
    justify-content: flex-start
    align-items: baseline
    margin: 120px 0 0
    .title-text
      margin-left: 120px
      font-size: 48px
  .product-number
    font-size: 104px

  .product-item
    position: relative
    display: flex
    justify-content: flex-start
    margin-bottom: 200px

  .product-img
    width: 720px
    height: 560px
    margin: 40px 0 0 120px
  .text
    position: absolute
    right: -12%
    bottom: 0
    transform: rotate(-90deg)
    transform-origin: 0 100%

  @keyframes automove
    0%
      transform: translate(0%)
    100%
      transform: translate(-100%)
</style>
