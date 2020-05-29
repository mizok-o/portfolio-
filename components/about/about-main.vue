<template lang="pug">
.about-main
  .about-img-container
    .img-mask-container(ref="imgback")
      img.img-content(src="~/assets/img/about-me.jpg")
  h1.about-title About me

</template>
<script>
import {TweenMax} from "gsap"
export default{
  mounted() {
    this.onIntersect()
  },
  methods: {
    onIntersect() {
      const options = {
        root: null,
        rootMargin: "-72px",
        threshold: 0.6
      }
      const observer = new IntersectionObserver(this.addShowClass)
      observer.observe(this.$refs.imgback)
    },
   addShowClass(entries) {
     for(const e of entries) {
       if (e.intersectionRatio) {
         e.target.classList.add("img-in")
       }
     }
   }
 }
}
</script>
<style lang="sass">
.about-main
  width: 90%
  margin: 0 auto

.about-img-container
  position: relative
  width: 100%
  height: 100%
  overflow: hidden
  text-align: center

.img-mask-container
  position: relative
  width: 100%
  height: 100%
  text-align: center
  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    width: 100%
    height: 100%
    background-color: #b70000
    transition: 1.8s cubic-bezier(0.5, 0, 0.75, 0)

.img-in
  &::before
    transform: translate(100%)

.img-content
  width: 100%
  height: 100%
  +sp-view
    width: 100%

.about-title
  position: absolute
  top: 10%
  left: 50%
  transform: translateX(-50%)
  font-family: 'ITC Galliard Pro'
  font-weight: 500
  font-size: 14em
  white-space: nowrap
  pointer-events: none
  +pc-lg-view
    font-size: 11em
  +pc-md-view
    font-size: 8.5em
  +pc-sm-view
    font-size: 7.5em
  +sp-view
    font-size: 5em
    bottom: 0
    margin-top: 10%
    height: 30%
    -webkit-text-stroke: 1px #fafafa
    color: transparent

</style>
