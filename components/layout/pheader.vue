<template lang="pug">
header.header-content
    ul.header-menu
      li
        a.header-link(href="/about") about
      li
        a.header-link(href="/") works
    img.header-text(src="../../assets/img/sidetext.svg")
</template>
<script lang='coffee'>

</script>
<style lang="sass">
.header-content
  margin: 3.5% 6% 0
  position: relative


.header-menu
  position: fixed
  display: flex
  width: 88%
  height: auto
  justify-content: space-between

.header-text
  position: absolute
  right: 0
  top: 32vh
  font-size: 14px

.header-link
  display: block
  width: 100%
  height: 24px
  position: relative
  /* ヘッダーのホバーアニメーション */
  &::before
    content: ""
    position: absolute
    top: 50%
    bottom: 50%
    left: 0
    width: 100%
    height: 1px
    background-color: #fff
    transform: scale(0,1)
    transform-origin: right
    pointer-events: none
    transition: transform 0.4s cubic-bezier(0.3, 0.575, 0.565, 1)
  &:hover::before
    transform: scale(1)
    transform-origin: left

/* #blockLinkList a[href*="/"] */

</style>
