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
  width: 100%
  margin: 168px 0 112px
  transition: transform 1s

/* 画像の入れ物 */
.svg-container
  width: 100%

/* 画像 */
.NuxtLogo
  display: block
  width: 74%
  margin: 0 auto

</style>
