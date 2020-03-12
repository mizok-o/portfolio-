<template lang="pug">
  .text-content
    p.about-text.text-item Hi, I'm Kotaro Mizoguchi, 19 years old. I'm learning economics at Univ and I’m working as an intern in a web studio.
      | Currently I can write css and html and a little bit vue.js.  I’m interested in getting new knowlidge. I’d like to try many new things. I usually prefer go somewhere alone.
      | But I also like to do something with freinds. I post on instagram about my travel. Check it out, I gonna renew it. I make efforts to be valuable person and have a fun.
    h2.text-item.about-subtitle Skills
    p.text-item.about-text figma/illustrator/photoshop/sketch/css/html/vue.js/nuxt.js/French
</template>
<script>
export default{
  mounted() {
    // rootからbottom:-150pxの位置で発火
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
  margin: 4% 12% 0
  width: 72%
  +sp-view
    width: 100%
  .text-item
    transform: translateX(0)

.about-text
  font-size: 16px
  font-weight: 300
  letter-spacing: 1px

/* skillsタイトル
.about-subtitle
  font-size: 24px
  font-weight: 400

/* アニメーション設定 */
.text-item
  transform: translateX(1800px)
  transition: transform 2.2s cubic-bezier(0.77, 0, 0.175, 1).5s
  &:nth-child(2)
    transition-duration: .6s
    transition-duration: 2.6s
    margin-top: 6%
  &:nth-child(3)
    transition-duration: 3s
    margin: 2% 0 20%
    word-wrap: break-word
  +sp-view
    width: 100%
    margin-top: 8%
</style>
