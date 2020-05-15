<template lang="pug">
header.header-content
  .header-area.u-pc-view
    a(href="#").header-icon-container(@mouseover="mouseover"  @mouseleave="mouseleave")
      .header-icon-background
        .menu-bar-mask
          .bar-hover(:class="[menu ? 'move-bar': '']")
        .menu-bar-mask
          .bar-hover(:class="[menu ? 'move-bar': '']")
        .menu-bar-mask
          .bar-hover(:class="[menu ? 'move-bar': '']")
  ul.header-menu.u-sp-view
    li.header-item
      a.header-link.link-about(href="/about") about
    li.header-item
      a.header-link.link-index(href="/")
        .header-item-index works
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
.header-content
  margin: 3% 5% 0
  position: relative
  +sp-view
    margin: 6% 0 0 75%

.header-area
  width: 80px
  height: 80px
  background-color: #b70000
  border: 2px solid #fafafa

.header-icon-container
  position: relative
  display: block
  overflow: hidden
  width: 100%
  height: 100%
  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #b70000
    transform: scale(1, 0)
    transform-origin: left bottom
    transition: all .3s
  &:hover
    &::before
      transform: scale(1, 1)
      transform-origin: left top

.header-icon-background
  width: 100%
  height: 100%

.move-bar
  transform: translateX(-100%)

.menu-bar-mask
  overflow: hidden
  position: absolute
  top: 16px
  left: 20px
  display: block
  height: 2px
  width: 36px
  background-color: #111
  margin-top: 10px
  &:nth-child(2)
    top: 27px
    .move-bar
      transition-delay: .1s
  &:nth-child(3)
    top: 38px
    .move-bar
      transition-delay: .2s

.bar-hover
  position: absolute
  top: -10px
  left: 36px
  display: block
  height: 2px
  width: 36px
  background-color: #fafafa
  margin-top: 10px
  transition: transform .5s ease-in-out

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
/* @keyframes menuanime
  0%
    transform: translateY(100%)
    transform-origin: bottom
    background-color: blue
  100%
    transform: translateY(-100%)
    transform-origin: top
    background-color: blue */
</style>
