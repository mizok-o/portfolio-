<template lang="pug">
  .main-visual
    .svg-container
      img.NuxtLogo(src="~/assets/img/portfolio-logo.svg")
</template>
<script>


</script>

<style lang="sass">
/* 全体の入れ物 */
.main-visual
  height: 90vh
  transition: transform 1s
  +sp-view
    transform: rotate(90deg)

/* 画像の入れ物 */
.svg-container
  position: relative
  width: 84%
  margin: 0 8%
  padding-top: 120px
  +pc-sm-view
    width: 880px
  +sp-view
    top: 33%
    bottom: 50%
    left: -12%
    margin: 0 0 0 2%
    width: 100%

/* 画像 */
.NuxtLogo
  width: 1040px
  height: auto

</style>
