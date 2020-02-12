<template lang="pug">
header.header-content
    ul.header-menu
      li
        a.header-link.link-about(href="/about") about
      li
        a.header-link.link-index(href="/") works
</template>
<style lang="sass">
.header-content
  margin: 3.5% 6% 0
  position: relative
  +sp-view
    margin: 5% 0 0 85%

.header-menu
  position: fixed
  display: flex
  width: 88%
  justify-content: space-between
  z-index: 1000
  font-size: 20px
  +sp-view
    display: block
    font-size: 18px
    width: auto
    position: fixed

.content-about
  .link-about
    &::before
      content: ""
      position: absolute
      top: 50%
      left: 0
      width: 100%
      height: 1px
      background-color: #fff
      transform: scale(1,1)
      pointer-events: none
  +sp-view
    .link-about, .link-index::after
      display: none
.content-index
  .link-index
    &::before
      content: ""
      position: absolute
      top: 50%
      left: 0
      width: 100%
      height: 1px
      background-color: #fff
      transform: scale(1,1)
      pointer-events: none
    +sp-view
      display: none

.link-index
  &::after
    content: "13"
    position: absolute
    right: -36%
    top: -20%
    display: inline-block
    font-size: 14px

.header-link
  position: relative
  display: block
  width: 100%
  height: 24px
  /* ヘッダーのホバーアニメーション */
  &::before
    content: ""
    position: absolute
    top: 50%
    left: 0
    width: 100%
    height: 1px
    background-color: #fff
    transform: scale(0,1)
    transform-origin: right
    pointer-events: none
    transition: transform 0.6s cubic-bezier(0.3, 0.575, 0.565, 1)
    +sp-view
      display: none
  &:hover::before
    transform: scale(1)
    transform-origin: left

  /* #blockLinkList a[href*="/"] */

</style>
