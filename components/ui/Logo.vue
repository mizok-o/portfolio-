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
  height: 89vh
  transition: transform 1s
  +sp-view
    transform: rotate(90deg)

/* 画像の入れ物 */
.svg-container
  position: relative
  width: 1400px
  padding: 120px 0 0 180px
  +pc-lg-view
    width: 1200px
    /* margin-left: 16% */
  +pc-md-view
    width: 1100px
    /* margin-left: 10% */
  +pc-sm-view
    width: 880px
  +sp-view
    top: 33%
    bottom: 50%
    left: -12%
    margin: 0 0 0 2%
    width: 100%
  &::after
    content: "I wanna make a great Value."
    display: block
    width: 31%
    margin: 144px 34.5% 0
    font-size: 28px
    font-weight: bold

/* 画像 */
.NuxtLogo
  width: 1040px
  height: auto

</style>
