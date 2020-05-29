<template lang="pug">
.about-main
  .about-img-container
    .img-mask-container
      img.img-content(src="~/assets/img/about-me.jpg")
  h1.about-title About me

</template>
<script>
import {TweenMax} from "gsap"
export default{

}
</script>
<style lang="sass">
.about-main
  width: 890px
  height: 544px
  margin: 0 auto
  text-align: center

.about-img-container
  overflow: hidden
  position: relative
  width: auto
  height: 100%
  text-align: center

.img-mask-container
  width: auto
  height: 100%
  transition: .4s
  text-align: center
  &:hover
    transform: scale(1.01)

.img-content
  width: 890px
  height: 544px
  vertical-align: top
  +sp-view
    width: 100%

.about-title
  position: absolute
  top: 12%
  left: 50%
  transform: translateX(-50%)
  font-family: 'ITC Galliard Pro'
  font-weight: 500
  font-size: 12em
  white-space: nowrap
  pointer-events: none
  +pc-lg-view
    font-size: 10em
  +pc-md-view
    font-size: 8.5em
  +pc-sm-view
    font-size: 6.5em
  +sp-view
    font-size: 5em
    bottom: 0
    margin-top: 48.5%
    height: 30%
    -webkit-text-stroke: 1px #fafafa
    color: transparent

/* @keyframes shown
  0%
    transform: matrix(1,0.00,0,1,32,800)
  100%
    transform: matrix(1,0.00,0,1,0,0)
 */


</style>
