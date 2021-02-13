<template lang="pug">
.main-visual
  .svg-container
    img.sitelogo.u-pc-view(src="~/assets/img/portfolio-logo.svg")
    img.sitelogo.u-sp-view(src="~/assets/img/portfolio-logo-sp.svg")
</template>
<script>


</script>

<style lang="sass">
/* 全体の入れ物 */
.main-visual
  width: 100%
  margin: 168px 0 0
  transition: transform 1s
  +sp-view
    margin-top: 64px

/* 画像の入れ物 */
.svg-container
  width: 100%

/* 画像 */
.sitelogo
  display: block
  width: 74%
  margin: 0 auto
  +sp-view
    width: 56%

</style>
