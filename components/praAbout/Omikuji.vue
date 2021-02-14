<template lang="pug">
.omikuji
  .omikuji__container
    h2.omikuji__title おみくじ
    .omikuji__content
      .omikuji__content-start
        .omikuji__start__exp ボタンを押したら始まるよ
        button(@click="show").omikuji__start__btn おみくじを引く
      .omikuji__content-result(:class="{active : result}")
        h3.omikuji__result-title {{choise.name}}
        p.omikuji__result-text ついてないね、、、ラッキーアイテムはSuchmosのCDだよ
        ul.omikuji__result-share
          li
            a(href="/about") シェア
          li
            a(href="/about") シェア
  .a
  .aa-box
    img(src="~/assets/img/about-me_2.jpg").aa
    p.textt Suchmos' first album is really worse.
  .b
  .bb

</template>
<script>
import textData from 'assets/omikuji.json'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  data(){
    return {
      textData: textData,
      result: false,
      random: "",
      choise: ""
    }
  },
  mounted(){
    this.scrollItemA(),
    this.scrollItemB()
  },
  methods: {
    show(){
      this.result = true
      this.random = Math.floor(Math.random() * 6)
      this.choise = this.textData[this.random]
    },
    scrollItemA(){
      gsap.to('.aa', {
        scale: 1.5,
        duration: 2,
        scrollTrigger: {
          trigger: '.a',
          start: 'top center',
          scrub: true,
          markers: true
        }
      })
    },
    scrollItemB(){
      gsap.to('.bb', {
        x: 600,
        rotation: 720,
        duration: 1,
        scrollTrigger: {
          trigger: '.b',
          start: 'center center',
          end: 'top 300px',
          scrub: true,
          markers: true
        }
      })
    }
  }
}
</script>
<style lang="sass">
.omikuji__content
  position: relative
  /* overflow: hidden */
  width: 320px
  height: 240px

.a
  width: 32px
  height: 32px
  margin: 400px 0 0
  background-color: blue

.aa-box
  position: relative
  overflow: hidden
  margin: 00px 0 100px 120px
  width: 400px
  height: auto

.aa
  width: 100%
  height: 100%
  background-color: #faa

.textt
  position: relative
  width: 360px
  margin-top: 200px
  &::before
    content: ""
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 1px
    transform: scale(1, 1)
    transform-origin: right
    padding-bottom: 4px
    border-bottom: 1px solid white
  &::after
    content: ""
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 1px
    transform: scale(0, 1)
    transform-origin: left
    padding-bottom: 4px
    border-bottom: 1px solid white
  &:hover
    &::before
      animation: Line 1.6s ease alternate backwards running
    &::after
      animation: Line2 1.6s ease alternate backwards running

@keyframes Line
  0%
    transform: scale(1, 1)
  60%
    transform: scale(0, 1)
  100%
    transform: scale(0, 1)

@keyframes Line2
  0%
    transform: scale(0, 1)
  100%
    transform: scale(1, 1)

.b
  width: 32px
  height: 32px
  margin: 400px 0 0
  background-color: white

.bb
  margin: 100px 0 800px
  width: 64px
  height: 64px
  background-color: yellow

.omikuji__content-start
  width: 100%
  height: 240px
  background-color: #aaaaaa

.omikuji__content-result
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 240px
  transform: translateY(30%)
  opacity: 0
  transition: all .5s ease-in-out
  background-color: #dddddd

.active
  transform: translateY(0)
  opacity: 1

</style>
