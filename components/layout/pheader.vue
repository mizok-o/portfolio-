<template lang="pug">
header.header-container
  ul.header-content
    li.header-item
      a.header-item-link.link-about(href="/about")
        .header-item-text about
    li.header-item
      a.header-item-link.link-index(href="/")
        .header-item-text works
  .header-side-text
    h2 Portfolio site
</template>
<script>
export default {
  data() {
    return{
      menu: false
    }
  },
  methods:{
    mouseover: function(){
      this.menu = true
    },
    mouseleave: function(){
      this.menu = false
    }
  }
}
</script>
<style lang="sass">
  /* ヘッダー全体 */
.header-container
  position: fixed
  width: 90%
  height: 60px
  z-index: 13
  +sp-view
    margin: 6% 0 0 75%

.header-content
  position: relative
  display: flex
    width: 100%
  justify-content: space-between
  padding: 20px 30px 0
  font-size: 22px

.header-side-text
  position: absolute
  top: 44vh
  right: -240px
  width: 290px
  height: 40px
  h2
    display: block
    position: fixed
    font-size: 20px
    letter-spacing: 1.5px
    transform: rotate(90deg)
    white-space: nowrap
    opacity: .7

.header-item-link
  position: relative
  display: block
  &::before
    content: ""
    position: absolute
    top: 45%
    left: 0
    width: 100%
    height: 1px
    background-color: #fff
    transform: scale(0, 0)
    transition: transform cubic-bezier(0.61, 1, 0.78, 1) .3s
    transform-origin: right top
  &:hover::before
    transform: scale(1, 1)
    transform-origin: left top

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
