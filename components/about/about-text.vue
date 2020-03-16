<template lang="pug">
  .text-content
    p.text-detail Currently I can write css and html and a little bit vue.js. I’m working as an intern in web studio. I’m not interested in only web, I like architecture, graphic, ui, product as well. I’d like to try many new things. I like coffee, mangas, films, cheeseburger and travel.
      br
      br
      | I post on instagram about my travel. I love traveling. sometimes alone. It will become really precious time to relax. And udon is 8 times delicious after the travel. Traveling is really good experience. I wish to go to Egypt for now.
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
        e.target.classList.remove("about-text")
       }
     }
   }
 }
}
</script>
<style lang="sass">6
/* スクロール後に表示 */
.showe
  width: 240px
  font-family: 'Meta Pro'
  font-weight: 500
  line-height: 144%
  .text-detail
    opacity: 1
    transform: translateX(0)
    transition: all 5s cubic-bezier(0.23, 1, 0.32, 1)
  +sp-view
    width: 100%

.text-detail
  opacity: 0
  transform: translateX(-100%)
  /* font-family: 'Meta Pro' */

</style>
