<template lang="pug">
.index
  pheader
  logo
  .works
    .works-title
      img.main-title(src="../assets/img/Current Works.svg")
      img.main-title(src="../assets/img/strow.svg")
    .product-list
      .product-content
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
      .product-content
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
  .works
    margin: 24% 0 0 11%
  .works-title
    display: flex
  .main-title
    font-size: 96px
    &:nth-child(2)
      padding-left: 2%

  .product-list
    display: flex
    justify-content: flex-start
    width: 260%
  .product-content
    width: 36%
  .product-title
    display: flex
    width: 100%
    justify-content: flex-start
    align-items: baseline
    margin: 6% 0 0
    .title-text
      margin-left: 10%
      font-size: 48px
  .product-number
    font-size: 104px

  .product-item
    position: relative
    display: flex
    justify-content: flex-start
    margin-bottom: 12%

  .product-img
    width: 64%
    height: 48%
    margin: 2% 0 0 10%
  .text
    position: absolute
    right: -16%
    bottom: 0
    transform: rotate(-90deg)
    transform-origin: 0 100%


</style>
