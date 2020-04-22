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
  name: 'animation',
 mounted() {
   this.onIntersect(),
   TweenMax.from(".img-content", { duration: 1.3, y: -100, x: -100, rotation: -4, opacity: .2, ease: "power3.in"}),
   TweenMax.to(".img-content", { duration: 1.3,y: 0, x: 0, opacity: 1 ,height: 544})
 },
 methods: {
   onIntersect(){
   const options = {
     root: null,
     rootMargin: "-72px",
     threshold: 0.6
   }
   const observer = new IntersectionObserver(this.addShowClass)
   // 監視したい要素をobserveする。
   observer.observe(this.$el)
 },
   addShowClass(entries) {
     for(const e of entries) {
       if (e.intersectionRatio) {
         e.target.classList.add("show")

      }
     }
   }
 }
}
</script>
<style lang="sass">

/* スクロール後に表示 */
.show
  width: 890px
  height: 544px
  margin: 0 auto
  text-align: center

.about-img-container
  overflow: hidden
  position: relative
  width: 101%
  height: 101%

.img-mask-container
  width: 101%
  height: 101%
  transition: .4s
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
  top: 10%
  left: 0
  max-width: 100%
  width: 100%
  margin: 0 auto
  font-family: 'ITC Galliard Pro'
  font-weight: 500
  font-size: 12em
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
