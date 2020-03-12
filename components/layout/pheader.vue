<template lang="pug">
header.header-content
    ul.header-menu
      li
        a.sns-content.link-about(href="/about") about
      li
        a.sns-content.link-index(href="/") works
</template>
<style lang="sass">
  /* ヘッダー全体 */
.header-content
  margin: 7vh 5% 0
  position: relative
  +sp-view
    margin: 6% 0 0 80%

.header-menu
  position: fixed
  display: flex
  width: 88%
  justify-content: space-between
  z-index: 1000
  font-size: 1.2em
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
    right: -30%
    top: -20%
    font-size: 14px

/* 線アニメーション */
.header-link
  position: relative
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
    transition: transform .8s cubic-bezier(0.3, 0.575, 0.565, 1)
    +sp-view
      display: none
  &:hover::before
    transform: scale(1)
    transform-origin: left

/* 線を表示させっぱなし */
.content-about
  .link-about
    color: #770000
    pointer-events: none
    &::before
      transform: scale(1,1)
  +sp-view
    .link-about
      display: none
.content-index
  .link-index
    color: #870000
    pointer-events: none
    &::before
      transform: scale(1,1)
    +sp-view
      display: none
</style>
