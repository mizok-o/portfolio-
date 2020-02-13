<template lang="pug">
  .about-image
    img.my-image(src="~/assets/img/about-me.jpg")
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
        e.target.classList.remove("about-image")

      }
     }
   }
 }
}
</script>
<style lang="sass">
.show
  .my-image
    transform: translateY(0)
.my-image
  transform: translateY(16%)
  transition: transform 1.2s cubic-bezier(0.6, 0.6, 0.22, 1) .35s
  width: 112%
  +pc-sm-view
    margin-top: 24%
  +sp-view
    margin: 20% -16% 0
    width: 136%
</style>
