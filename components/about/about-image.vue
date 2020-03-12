<template lang="pug">
  .about-image
    img.u-pc-view.img-content(src="~/assets/img/about-me.jpg")
    img.u-sp-view.sp-img-content(src="~/assets/img/about-me_02.jpg")

</template>
<script>
export default{
  name: 'animation',
 mounted() {
   this.onIntersect()
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
  position: relative
  overflow: hidden
  height: 100%
  width: 100%
  +pc-md-view
    width: 138%
  +pc-sm-view
    width: 168%
  +sp-view
    width: 88%
  .my-image
    padding-top: 72vh
  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    background-color: #B70000
    width: 100%
    height: 100%
    z-index: 2
    transform: translateX(100%)
    animation: shown 2.4s cubic-bezier(0.77, 0, 0.175, 1)

.img-content
  position: absolute
  top: 0
  right: 0
  height: 100%
  width: auto
  transform: translateY(-2%)
  &:nth-child(2)
    z-index: 1
  &:nth-child(3)
    z-index: 2
  +sp-view
    transform: translateY(0)

@keyframes shown
  0%
    transform: translateX(0%)
  100%
    transform: translatex(100%)

</style>
