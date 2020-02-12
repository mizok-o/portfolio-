<template lang="pug">
  h1.about-title Who am I?
</template>
<script>

export default{
 mounted() {
   // rootからbottom:-150pxの位置で発火
   const options = {
     root: null,
     rootMargin: "-72px",
     threshold: 0.8
   }
   const images = document.querySelectorAll('.about-title')
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
         e.target.classList.add("showc")
        e.target.classList.remove("about-title")

       }
     }
   }
 }
}
</script>
<style lang="sass">
.showc
  animation: fadeout .8s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s 1
  font-size: 64px
  +sp-view
    font-size: 48px
    margin-top: 8%
.about-title
  opacity: 0
  font-size: 64px
  +sp-view
    font-size: 48px
    margin-top: 8%
@keyframes fadeout
  0%
    opacity: 0
    transform: translateX(60%)
  100%
    opacity: 1
    transform: translateX(0%)
</style>
