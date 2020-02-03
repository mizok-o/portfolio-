<template lang="pug">
header.header-content
    ul.header-menu
      li
        a.header-link.link-about(href="/about") about
      li
        a.header-link.link-index(href="/") works
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

.content-about
  .link-about
    &::before
      content: ""
      position: absolute
      top: 50%
      bottom: 50%
      left: 0
      width: 100%
      height: 1px
      background-color: #fff
      transform: scale(1,1)
      pointer-events: none
.content-index
  .link-index
    &::before
      content: ""
      position: absolute
      top: 50%
      bottom: 50%
      left: 0
      width: 100%
      height: 1px
      background-color: #fff
      transform: scale(1,1)
      pointer-events: none

.link-index
  &::after
    content: "24"
    position: absolute
    right: -36%
    top: -20%
    display: inline-block
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
    transition: transform 0.6s cubic-bezier(0.3, 0.575, 0.565, 1)
  &:hover::before
    transform: scale(1)
    transform-origin: left

  /* #blockLinkList a[href*="/"] */

</style>
