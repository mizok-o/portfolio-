<template lang="pug">
  nuxt
</template>
<script>
export default {
  mounted() {
    Typekit.load({async: true})
  }
  }

</script>
<style lang="sass">
html
  /* font-family: 'ITC Galliard Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif */
  font-size: 18px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  background-color: #B70000
  color: #fafafa
  -ms-overflow-style: none
  scrollbar-width: none
  max-width: 100%
  &::-webkit-scrollbar
    display: none
  +sp-view
    font-size: 14px
body
  position: relative
  width: 100%
*
  box-sizing: border-box
body, .container
  overflow-x: hidden
li, a
  margin: 0
  padding: 0

ul, ol
  list-style: none
  padding: 0
  margin: 0
*
  box-sizing: border-box
  margin: 0

  &:before, &:after
    box-sizing: border-box
    margin: 0

a
  text-decoration: none
  color: #fff

.container
  position: relative
  height: auto
  -ms-overflow-style: none
  scrollbar-width: none
.container::-webkit-scrollbar
  display: none
</style>
