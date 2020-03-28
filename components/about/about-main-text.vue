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

  width: 100%
  +sp-view
    width: 92%
    margin: 28% 4% 0
  .text-item
    transform: translateY(0)
    opacity: 1

.about-text
  font-size: 40px
  letter-spacing: .5px
  width: 100%
  +pc-md-view
    font-size: 32px
    letter-spacing: 1px
  +sp-view
    font-size: 23px
    line-height: 128%
    letter-spacing: 1.8px


/* アニメーション設定 */
.text-item
  transform: translateY(40%)
  opacity: 0
  transition: transform 2s cubic-bezier(0.61, 1, 0.78, 1), opacity 2s cubic-bezier(0.61, 1, 0.78, 1) .2s
  +sp-view
    width: 100%
    margin-top: 8%
</style>
