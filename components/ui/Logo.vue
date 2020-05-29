<template lang="pug">
  .main-visual
    .svg-container
      img.NuxtLogo.u-pc-view(src="~/assets/img/portfolio-logo.svg")
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
  width: 1040px
  height: auto
  +pc-sm-view
    width: 880px
  +sp-view
    margin: -16% auto 0 
    width: 180px

</style>
