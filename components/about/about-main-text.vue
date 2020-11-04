<template lang="pug">
.text-content
  p.about-text.text-item I’m learning economics and I’m interested in design and making it. My mission is showing value of valuable products people doesn't realize yet, make people impressed with creative design.
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

/* アニメーション設定 */
.text-item
  transform: translateY(40%)
  opacity: 0
  transition: transform 1s cubic-bezier(0.61, 1, 0.78, 1), opacity 2s cubic-bezier(0.61, 1, 0.78, 1) .2s
  font-weight: 500
  font-size: 36px
  letter-spacing: 1px
  width: 100%
  +pc-md-view
    font-size: 32px
    letter-spacing: 1px
  +sp-view
    width: auto
    margin-top: 8%
    font-size: 21px
    line-height: 128%
    letter-spacing: 1.5px
</style>
