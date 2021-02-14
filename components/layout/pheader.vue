<template lang="pug">
header.header
  .header-container
    ul.header-content
      li
        a.header-item-link.link-about(href="/about")
          .header-item-text about
      li
        a.header-item-link.link-index(href="/")
          .header-item-text works
</template>
<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 64px
  z-index: 13
  +sp-view

.header-container
  margin: 20px 56px
  +sp-view
    margin: 0
    height: 100%

.header-content
  display: flex
  width: 100%
  justify-content: space-between
  font-size: 22px
  +sp-view
    height: 24px
    justify-content: flex-end
    margin: 20px 0
    padding-right: 32px

.header-item-text
  font-size: 18px

.header-item-link
  position: relative
  display: block
  &::before
    content: ""
    position: absolute
    top: 45%
    left: 0
    width: 100%
    height: 2px
    background-color: #fff
    transform: scale(0, 0)
    transition: transform cubic-bezier(0.61, 1, 0.78, 1) .3s
    transform-origin: right top
  &:hover::before
    transform: scale(1, 1)
    transform-origin: left top
  +sp-view
    &::before
      top: 50%

/* 線を表示させっぱなし */
.content-about
  .link-about
    &::before
      transform: scale(1, 1)
    pointer-events: none
    +sp-view
      display: none

.content-index
  .link-index
    &::before
      transform: scale(1, 1)
    pointer-events: none
    +sp-view
      display: none

</style>
