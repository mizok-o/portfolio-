<template lang="pug">
.index
  .line-container
    .line1
    .line2
    svg.line3(width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg")
      //path(d="M1.49012e-06 3V3C19.8823 3 36 19.1178 36 39V39" stroke="#0060CC" stroke-width="5")
  h2.line-title このサイトの強み
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: 'content-about'
    }
  }
}
</script>
<style lang="sass">
.index
  position: relative
  display: flex
  flex-wrap: wrap
  align-items: center
  align-content: center
  margin: 0 auto
  width: 100%
  height: 100%

.line-title
  position: absolute
  top: 12px
  left: 50%
  transform: translateX(-50%)
  padding: 0 12px
  color: #0060cc
  background-color: #ffffff

.line-container
  position: absolute
  top: 32px
  left: 64px
  display: flex
  justify-content: center
  width: calc(100% - 128px)
  height: 64px
.line1
  width: 42px
  height: 42px
  background-size: 42px auto
  background-position: 2px -1px
  background-repeat: no-repeat
  background-image: url('~assets/img/sss.svg')

.line2
  width: calc(100% - 72px)
  height: 5px
  text-align: center
  background-color: #0060cc
.line3
  width: 42px
  height: 42px
  background-size: 42px auto
  background-position: -2px -1px
  background-repeat: no-repeat
  background-image: url('~assets/img/ss.svg')

</style>
