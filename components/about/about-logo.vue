<template lang="pug">
.about-logo-container
  img.about-logo(src="~/assets/img/logo.svg" fill="#fafafa")
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
         e.target.classList.add("showf")
        e.target.classList.remove("about-logo-container")
       }
     }
   }
 }
}
</script>
<style lang="sass">
.showf
  .about-logo
    position: absolute
    top: 60px
    right: -160px
    width: 220px
    opacity: 1
    transform: translateX(0) rotate(4deg)
    transition: transform 2.4s cubic-bezier(0.61, 1, 0.78, 1), opacity 2.4s cubic-bezier(0.61, 1, 0.78, 1)
    +sp-view
      width: 120px

.showf, .about-logo-container
  +pc-sm-view
    display: none

.about-logo
  opacity: 0
  transform: translateX(60%)
</style>
