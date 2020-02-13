<template lang="pug">
header.header-content
    ul.header-menu
      li
        a.header-link.link-about(href="/about") about
      li
        a.header-link.link-index(href="/") works
</template>
<style lang="sass">
  /* ヘッダー全体 */
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
  +sp-view
    display: block
    font-size: 16px
    width: auto
    position: fixed

/* works右上の番号 */
.link-index
  &::after
    content: "13"
    position: absolute
    right: -36%
    top: -20%
    display: inline-block
    font-size: 14px

/* 線アニメーション */
.header-link
  position: relative
  &::before
    content: ""
    position: absolute
    top: 56%
    left: 0
    width: 100%
    height: 1px
    background-color: #fff
    transform: scale(0,1)
    transform-origin: right
    transition: transform .8s cubic-bezier(0.3, 0.575, 0.565, 1)
    +sp-view
      display: none
  &:hover::before
    transform: scale(1)
    transform-origin: left

/* 線を表示させっぱなし */
.content-about
  .link-about
    pointer-events: none
    &::before
      transform: scale(1,1)
  +sp-view
    .link-about
      display: none
.content-index
  .link-index
    pointer-events: none
    &::before
      transform: scale(1,1)
    +sp-view
      display: none
</style>
