<template lang="pug">
  .main-visual
    img.NuxtLogo(src="../../assets/img/Kotaro Mizoguchi.svg")
    img.background(src="../../assets/img/name.svg")
</template>
<style　lang="sass">
.main-visual
 padding-bottom: 600px

.NuxtLogo
  position: absolute
  top: 12%
  left: 11%
  display: block
  width: 72%
  height: auto
  z-index: 1000
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
  &:hover
    opacity: 0
  &:hover + .header-text
    opacity: 1


.background
  position: absolute
  top: 12%
  left: 11%
  width: 72%
  height: auto
</style>
