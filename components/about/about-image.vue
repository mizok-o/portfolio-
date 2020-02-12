<template lang="pug">
  .about-image
    img.my-image(src="~/assets/img/about-me.jpg")
</template>
<script>

export default{
  name: 'animation',
 mounted() {
   // rootからbottom:-150pxの位置で発火
   const options = {
     root: null,
     rootMargin: "-72px",
     threshold: 0.6
   }
   const images = document.querySelectorAll('.my-image')
   images.forEach((target) => this.onIntersect(target, options))
 },
 methods: {
   onIntersect(target, options = {}) {
     const observer = new IntersectionObserver(this.addShowClass, options)
     // 監視したい要素をobserveする。
     observer.observe(target)
   },
   addShowClass(entries) {
     for(const e of entries) {
       if (e.intersectionRatio) {
         e.target.classList.add("show")
        e.target.classList.remove("my-image")

      }
     }
   }
 }
}
</script>
<style lang="sass">
.show
  animation: fadein 3s cubic-bezier(0.19, 1, 0.22, 1) 0s 1
  width: 100%
  +pc-sm-view
    margin-top: 24%
  +sp-view
    margin: 20% -16% 0
    width: 136%
.my-image
  opacity: 0
  width: 100%
  +pc-sm-view
    margin-top: 24%
  +sp-view
    margin: 20% -16% 0
    width: 136%
@keyframes fadein
  0%
    opacity: 0
    transform: translateY(30%)
  100%
    opacity: 1
    transform: translateY(0%)
</style>
