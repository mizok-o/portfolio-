<template lang="pug">
  .main-visual
    .svg-container
      .NuxtLogo
        img.logo-anime1(src="~/assets/img/Kotarog.svg")
      .NuxtLogo
        img.logo-anime2(src="~/assets/img/Mizoguchi.svg")

</template>
<style lang="sass">
/* 全体の入れ物 */
.main-visual
  height: 860px
  position: relative

/* 画像の入れ物 */
.svg-container
  position: absolute
  width: 100%
  height: 48%
  margin: 8% 0 0 12%
  &:hover
    .NuxtLogo
      fill: #B70000

/* 画像 */
.NuxtLogo
  position: relative
  overflow: hidden
  height: 50%
  width: 100%


.logo-anime1
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 54%
  animation: logoAnime  2s cubic-bezier(0.77, 0, 0.175, 1)
.logo-anime2
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 64%
  animation: logoAnime 2.1s cubic-bezier(0.77, 0, 0.175, 1)

/* aboutページのとき
.content-about
  .NuxtLogo
    opacity: .3
    overflow: hidden
    position: relative

@keyframes logoAnime
  0%
    transform: translateY(112%)
  10%
    transform: translateY(112%)
  100%
    transform: translateY(0)

</style>
