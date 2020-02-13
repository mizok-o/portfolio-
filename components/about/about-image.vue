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

/* スクロール後に表示 */
.show
  .my-image
    transform: translateX(0)

/* アニメーション設定 */
.my-image
  transform: translateX(-40%)
  transition: transform 1.75s cubic-bezier(0.6, 0.6, 0.22, 1)
  width: 100%
  +pc-md-view
    margin-top: 8%
    width: 80%
  +sp-view
    transform: translateX(-100%)
    transition-delay: .55s
    transition-duration: 1s
    margin: 20% -16% 0
    width: 136%
</style>
