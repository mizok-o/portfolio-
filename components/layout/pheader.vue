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

/* 線を表示させっぱなし */
.content-about
  .link-about
    color: #87120b
    pointer-events: none
    &::before
      transform: scale(1,1)
  +sp-view
    .link-about
      display: none
.content-index
  .link-index
    color: #87120b
    pointer-events: none
    &::before
      transform: scale(1,1)
    +sp-view
      display: none
</style>
