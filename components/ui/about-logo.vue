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
    width: 144%
    margin: 12% 0 0 -80%
    opacity: .8
    transform: translateY(0) rotate(4deg)
    transition: transform 5s cubic-bezier(0.19, 1, 0.22, 1), opacity 6s cubic-bezier(0.19, 1, 0.22, 1)
    +sp-view
      width: 100%

.about-logo
  opacity: 0
  transform: translateY(-32%)
</style>
