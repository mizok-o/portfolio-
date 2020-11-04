<template lang="pug">
.text-content
  p.text-detail Currently I can write css and html and js with Nuxt. I’m working as an intern in web studio. I’m not interested in only web, I like graphic, ui, product as well. And my hobby is traveling, films, reading, eating cheezeburgers and udon.
    br
    br
    | I love traveling, often alone. It's really good opportunity to relax and meet many new things. New cultures, people and places will make me aware new points of view. I'm sure to keep challenging a lot of things to have a fun.
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
         e.target.classList.add("showe")
       }
     }
   }
 }
}
</script>
<style lang="sass">
/* スクロール後に表示 */
.showe
  width: 560px
  font-weight: 500
  line-height: 144%
  .text-detail
    opacity: 1
    transform: translateY(0)
    transition: all 3s cubic-bezier(0.23, 1, 0.32, 1)
  +sp-view
    width: 76%
    margin: 0 12% 0
    font-size: 15px
    line-height: 152%
    letter-spacing: 1.5

.text-detail
  opacity: 0
  transform: translateY(40%)
</style>
