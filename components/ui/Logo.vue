<template lang="pug">
  .main-visual
    .svg-container
      img.NuxtLogo(src="~/assets/img/portfolio-logo.svg")
      img.NuxtLogo.u-sp-view(src="~/assets/img/portfolio-logo-sp.svg")
</template>
<script>


</script>

<style lang="sass">
/* 全体の入れ物 */
.main-visual
  height: 90vh
  transition: transform 1s

/* 画像の入れ物 */
.svg-container
  position: relative
  width: 84%
  margin: 0 8%
  padding-top: 120px

/* 画像 */
.NuxtLogo
  width: 1200px
  height: auto
  margin: 8% 0 0 2%
  +pc-lg-view
    width: 970px
  +pc-md-view
    width: 820px
  &:first-child
    +pc-sm-view
      display: none
  &:nth-child(2)
    +pc-sm-view
      display: block
      width: 280px
      margin: -2% auto 0
    +sp-view
      width: 180px
      margin: -16% auto 0

</style>
