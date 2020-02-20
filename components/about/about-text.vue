<template lang="pug">
  .about-text
    p.text-item Currently I can write css and html and a little bit vue.js. I’m working as an intern in web studio. I’m not interested in only web, I like architecture, graphic, ui, product as well. I’d like to try many new things. I like coffee, mangas, films, cheeseburger and travel.
      | I post on instagram about my travel. My dream is remote-working abroad with a  computer once.
    h2.text-item.about-subtitle Skills
    p.text-item.about-subtext figma/illustrator/photoshop/sketch/css/html/vue.js/nuxt.js/French
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
  margin: 12% 0 0
  width: 72%
  +pc-md-view
    margin-top: 4%
  +sp-view
    width: 100%
  .text-item
    transform: translateX(0)

/* skillsテキスト */
.about-subtext
  word-wrap: break-word

/* skillsタイトル
.about-subtitle
  font-size: 32px
  +sp-view
    font-size: 24px

/* アニメーション設定 */
.text-item
  transform: translateX(1600px)
  transition: transform 2.1s cubic-bezier(0.77, 0, 0.175, 1)
  &:nth-child(2)
    transition-delay: .1s
    margin-top: 10%
  &:nth-child(3)
    transition-delay: .1s
    margin-top: 2%
  +sp-view
    width: 100%
    margin-top: 8%
</style>
