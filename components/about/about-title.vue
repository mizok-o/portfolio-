<template lang="pug">
  .about-title
    h1.title-text Who am I?
</template>
<script>
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
     observer.observe(this.$el)
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

/* スクロール後に表示 */
.showc
  .title-text
    transform: translateX(0)

/* アニメーション設定 */
.title-text
  font-size: 64px
  transform: translateX(24%)
  transition: transform 1s cubic-bezier(0.6, 0.6, 0.22, 1)
  +sp-view
    font-size: 48px
    margin-top: 8%
</style>
