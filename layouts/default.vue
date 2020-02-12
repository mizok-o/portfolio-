<template lang="pug">
.container
  nuxt
</template>
<script>
</script>
<style lang="sass">
html
  font-family: 'cormorant', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif
  font-size: 18px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  background-color: #B70000
  color: #f0f0f0
  box-sizing: border-box
  -ms-overflow-style: none
  scrollbar-width: none
  max-width: 100%
  &::-webkit-scrollbar
    display: none
  +sp-view
    font-size: 14px
body, .container
  overflow-x: hidden
  /* メニューアニメーション */
body::after
  content: ""
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #333
  z-index: 9999
  pointer-events: none
  /* animation: load 2s cubic-bezier(0.895, 0.08, 0.42, 0.3) 1 */
  transform: translateX(100%)
@keyframes load
  0%
    transform: translate(0%)
  100%
    transform: translate(100%)
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
