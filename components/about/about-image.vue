<template lang="pug">
  .about-image
    .background-mask
      .my-image
        .img-content-mask.image_01
          img.img-content.mask_01(src="~/assets/img/my_img.jpg")

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
  width: auto
  perspective: 1600px
  .my-image
    padding-top: 72vh

.img-content-mask, .background-mask
  transform-style: preserve-3d

.img-content-mask
  pointer-events: none

.background-mask
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  animation: shown 3s cubic-bezier(0.77, 0, 0.175, 1)

.img-content-mask
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden

.image_02
  animation: slide2 8s infinite cubic-bezier(0.77, 0, 0.175, 1)
.image_03
  animation: slide3 8s infinite cubic-bezier(0.77, 0, 0.175, 1)

.img-content
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: auto
  &:nth-child(2)
    z-index: 1
  &:nth-child(3)
    z-index: 2
  +sp-view
    margin: 20% -16% 0
    width: 136%

.mask_01
  animation: scale1 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1)
.mask_02
  animation: scale2 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1)
.mask_03
  animation: scale3 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1)

@keyframes shown
  0%
    width: 0
  100%
    width: 100%
/* @keyframes slide2
  0%
    width: 0
  50%
    width: 100%
  100%
    width: 100% */

/* @keyframes slide3
  0%
    width: 0
  50%
    width: 0
  100%
    width: 100% */

/* @keyframes scale1
  0%
    transform: scale(1.2)
  24%
    transform: scale(1.2)
  40%
    transform: scale(1)
  90%
    transform: scale(1)
  100%
    transform: scale(1.2) */

/* @keyframes scale2
  0%
    transform: scale(1.1)
  24%
    transform: scale(1.1)
  40%
    transform: scale(1.2)
  75%
    transform: scale(1.2)
  100%
    transform: scale(1) */

/* @keyframes scale3
  0%
    transform: scale(1.1)
  75%
    transform: scale(1.1)
  100%
    transform: scale(1.2) */

</style>
