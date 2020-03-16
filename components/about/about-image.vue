<template lang="pug">
  .about-image
    img.img-content(src="~/assets/img/about-me.jpg")
    h1.about-me About me

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
  width: 100%
  height: 100%
  text-align: center

.img-content
  height: 120%
  width: 80%

.about-me
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  margin: auto
  height: 50%
  font-weight: 500
  font-size: 12em

@keyframes shown
  0%
    transform: translateX(0%)
  100%
    transform: translatex(100%)

</style>
