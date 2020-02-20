<template lang="pug">
  .about-image
    .my-image
      .img-content-mask.image_01
        img.img-content.mask_01(src="~/assets/img/about-me.jpg")
      .img-content-mask.image_02
        img.img-content.mask_02(src="~/assets/img/about_me_03.jpg")
      .img-content-mask.image_03
        img.img-content.mask_03(src="~/assets/img/about-me.jpg")

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
  /* &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    background-color: #B70000
    width: 100%
    height: 100%
    z-index: 5
    transform: translateX(-100%)
    animation: shown 2s cubic-bezier(0.77, 0, 0.175, 1) 1 */
  .my-image
    padding-top: 67%

.img-content-mask
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden

.image_02
  animation: slide2 8s infinite cubic-bezier(0.77, 0, 0.175, 1) .5s
.image_03
  animation: slide3 8s infinite cubic-bezier(0.77, 0, 0.175, 1) .5s


.img-content
  position: absolute
  top: 0
  left: 0
  min-width: 100%
  height: 112%
  &:nth-child(2)
    z-index: 1
  &:nth-child(3)
    z-index: 2
  +pc-md-view
    margin-top: 8%
  +sp-view
    margin: 20% -16% 0
    width: 136%

.mask_01
  animation: scale1 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1) .5s
.mask_02
  animation: scale2 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1) .5s
.mask_03
  animation: scale3 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1) .5s

@keyframes shown
  0%
    transform: translateX(0)
  100%
    transform: translateX(-100%)
@keyframes slide2
  0%
    width: 0
  50%
    width: 100%
  100%
    width: 100%

@keyframes slide3
  0%
    width: 0
  50%
    width: 0
  100%
    width: 100%

@keyframes scale1
  0%
    transform: scale(1.2)
  24%
    transform: scale(1.2)
  40%
    transform: scale(1)
  90%
    transform: scale(1)
  100%
    transform: scale(1.2)

@keyframes scale2
  0%
    transform: scale(1.1)
  24%
    transform: scale(1.1)
  40%
    transform: scale(1.2)
  75%
    transform: scale(1.2)
  100%
    transform: scale(1)

@keyframes scale3
  0%
    transform: scale(1.1)
  75%
    transform: scale(1.1)
  100%
    transform: scale(1.2)

</style>
