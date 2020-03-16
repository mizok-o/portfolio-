<template lang="pug">
  .text-content
    p.about-text.text-item I’m learning economics but I’m also really interested in design. Designers thoughts are surprising so I wanna work with them and improve my skills.
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
         e.target.classList.add("showb")
        e.target.classList.remove("about-text")
       }
     }
   }
 }
}
</script>
<style lang="sass">

/* スクロール後に表示 */
.showb
  font-family: 'Meta Pro'
  width: 100%
  +sp-view
    width: 100%
  .text-item
    transform: translateX(0)
    opacity: 1

.about-text
  font-size: 40px
  font-weight: 500
  letter-spacing: .5px
  width: 100%

/* アニメーション設定 */
.text-item
  transform: translateX(20%)
  opacity: 0
  transition: transform 7s cubic-bezier(0.23, 1, 0.32, 1), opacity 7s cubic-bezier(0.23, 1, 0.32, 1) .2s
  +sp-view
    width: 100%
    margin-top: 8%
</style>
