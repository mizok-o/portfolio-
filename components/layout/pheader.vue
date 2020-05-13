<template lang="pug">
header.header-content
    ul.header-menu
      li.header-item
        a.header-link.link-about(href="/about") about
      li.header-item
        a.header-link.link-index(href="/")
          .header-item-index works
</template>
<style lang="sass">
  /* ヘッダー全体 */
.header-content
  margin: 3% 5% 0
  position: relative
  +sp-view
    margin: 6% 0 0 75%

.header-menu
  position: fixed
  display: flex
  width: 88%
  justify-content: space-between
  z-index: 1000
  font-size: 1.2em
  +sp-view
    display: block
    position: fixed

.header-item
  position: relative
  overflow: hidden

.header-item-index
  transition: 1.4s
  &::before
    content: "works"
    position: absolute
    top: 0
    right: 140px


.header-link
  display: block

/* 線を表示させっぱなし */
.content-about
  .link-about
    color: #87120b
    pointer-events: none
    &::before
      transform: scale(1,1)
    +sp-view
      display: none
  .link-index
    transform: translateX(0)
    &:hover
      .header-item-index
        transition: .4s
        transform: translateX(140px)

.content-index
  .link-index
    color: #87120b
    pointer-events: none
    &::before
      transform: scale(1,1)
    +sp-view
      display: none
</style>
