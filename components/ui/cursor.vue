<template lang="pug">
.cursor
  .follow
</template>
<script>
export default{
  mounted() {
    this.mouseMove()
  },
  methods: {
    mouseMove: ()=> {

        let x = Math.round(event.pageX / 100)

        let y = Math.round(event.pageY / 100)

  this.style.marginLeft = -x +'px'
  tgus.style.marginTop = -y +'px'
      }
    }
  }
</script>

<style lang="sass">
.container
  position: relative
  cursor: none

.cursor, .follow
  border-radius: 50%
  position: absolute
  top: 0
  left: 0
  cursor: none
  pointer-events: none


.cursor
  width: 8px
  height: 8px
  background-color: #000
  z-index: 2001


.follower
  display: flex
  justify-content: center
  align-items: center
  width: 40px
  height: 40px
  background-color: #333
  z-index: 2000
  transition: transform ease .1s
  text-align: center

</style>
