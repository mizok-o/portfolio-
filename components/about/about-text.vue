<template lang="pug">
  .about-text
    p.text-item Currently I can write css and html and a little bit vue.js. I’m working as an intern in web studio. I’m not interested in only web, I like architecture, graphic, ui, product as well. I’d like to try many new things. I like coffee, mangas, films, cheeseburger and travel.
      | I post on instagram about my travel. My dream is remote-working abroad with a  computer once.
    .text-item
      h3 skills
      p.about-subtext figma/illustrator/photoshop/sketch/css/html/vue.js/nuxt.js
</template>
<script>

export default{
 mounted() {
   // rootからbottom:-150pxの位置で発火
   const options = {
     root: null,
     rootMargin: "-72px",
     threshold: .4
   }
   const images = document.querySelectorAll('.about-text')
   images.forEach((target) => this.onIntersect(target, options))
 },
 methods: {
   onIntersect(target, options = {}) {
     const observer = new IntersectionObserver(this.addShowClass, options)
     // 監視したい要素をobserveする。
     observer.observe(target)
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
.about-text
  opacity: 0
.showb
  animation: fadeout 3s cubic-bezier(0.19, 1, 0.22, 1) 0s 1
  margin: 12% 0 0
  width: 72%
  +pc-md-view
    font-size: 16px
  +sp-view
    width: 100%
    margin-top: 8%
.text-item
  margin: 12% 0 0
  width: 100%
  +pc-md-view
    font-size: 16px
  +sp-view
    width: 100%
    margin-top: 8%
.about-subtext
  word-wrap: break-word
@keyframes fadeout
  0%
    opacity: 0
    transform: translateX(20%)
  100%
    opacity: 1
    transform: translateX(0%)
</style>
