<template lang="pug">
  .main-visual
    .svg-container
      .NuxtLogo
        img.logo-anime1(src="~/assets/img/Kotaro.svg")
      .NuxtLogo
        img.logo-anime2(src="~/assets/img/Mizoguchi.svg")

</template>
<style lang="sass">
/* 全体の入れ物 */
.main-visual
  height: 88vh
  width: 100%
  position: relative
  transition: transform 1s
  +sp-view
    transform: rotate(90deg)

/* 画像の入れ物 */
.svg-container
  position: absolute
  width: 1400px
  height: 44vh
  margin: 8% 0 0 14%
  +pc-lg-view
    width: 1200px
    margin-left: 16%
  +pc-md-view
    width: 1100px
    margin-left: 10%
  +pc-sm-view
    width: 880px
  +sp-view
    top: 33%
    bottom: 50%
    left: -12%
    margin: 0
    width: 560px

/* 画像 */
.NuxtLogo
  position: relative
  overflow: hidden
  height: 50%
  width: 100%
  text-align: left
  +pc-lg-view
    height: 42%
  +sp-view
    height: 32%
  &:first-child
    height: 41%
    +pc-lg-view
      height: 36%
    +sp-view
      height: 32%

.logo-anime1
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 60%
  /* margin-right: auto */
  animation: logoAnime  1.6s cubic-bezier(0.77, 0, 0.175, 1)
  +pc-lg-view
    width: 54%
  +sp-view
    top: 12%
    width: 56%
.logo-anime2
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 80%
  animation: logoAnime 1.7s cubic-bezier(0.77, 0, 0.175, 1)
  +sp-view
    width: 78%
@keyframes logoAnime
  0%
    transform: translateY(112%)
  10%
    transform: translateY(112%)
  100%
    transform: translateY(0)

</style>
