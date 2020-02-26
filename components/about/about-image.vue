<template lang="pug">
  .about-image
    .background-mask
      .my-image
        .img-content-mask.image_01
          img.img-content.mask_01(src="~/assets/img/my_img.jpg")

</template>
<script>
export default{
  name: 'animation',
 mounted() {
   this.onIntersect()
 },
 methods: {
   onIntersect(){
   const options = {
     root: null,
     rootMargin: "-72px",
     threshold: 0.6
   }
   const observer = new IntersectionObserver(this.addShowClass)
   // 監視したい要素をobserveする。
   observer.observe(this.$el)
 },
   addShowClass(entries) {
     for(const e of entries) {
       if (e.intersectionRatio) {
         e.target.classList.add("show")

      }
     }
   }
 }
}
// if(process.client) {
//   let articles = $('article > .item-wrapper'),
//     lightingRgb = '255,255,255';
//
// articles.mousemove(function(e) {
//   var current = $(this),
//       x = current.width() - e.offsetX * 2,
//       y = current.height() - e.offsetY * 2,
//       rx = -x / 30,
//       ry = y / 24,
//       deg = Math.atan2(y, x) * (180 / Math.PI) + 45;
//   current.css({"transform":"scale(1.05) rotateY("+rx+"deg) rotateX("+ry+"deg)"});
//   $('figure > .lighting',this).css('background','linear-gradient('+deg+'deg, rgba('+lightingRgb+',0.32) 0%, rgba('+lightingRgb+',0) 100%)');
// });
//
// articles.on({
//   'mouseenter':function() {
//     var current = $(this);
//     current.addClass('enter ease').removeClass("leave");
//     setTimeout(function(){
//       current.removeClass('ease');
//     }, 280);
//   },
//   'mouseleave':function() {
//     var current = $(this);
//     current.css({"transform":"rotate(0)"});
//     current.removeClass('enter').addClass("leave");
//     $('figure > .lighting',this).removeAttr('style');
//   }}
// );
// }
</script>
<style lang="sass">

/* スクロール後に表示 */
.show
  position: relative
  overflow: hidden
  height: 100%
  width: auto
  perspective: 1600px
  .my-image
    padding-top: 72vh

.img-content-mask, .background-mask
  transform-style: preserve-3d

.img-content-mask
  pointer-events: none

.background-mask
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  animation: shown 3s cubic-bezier(0.77, 0, 0.175, 1)

.img-content-mask
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden

.image_02
  animation: slide2 8s infinite cubic-bezier(0.77, 0, 0.175, 1)
.image_03
  animation: slide3 8s infinite cubic-bezier(0.77, 0, 0.175, 1)

.img-content
  position: absolute
  top: 0
  left: 0
  transform: translateX(-16%)
  height: 100%
  &:nth-child(2)
    z-index: 1
  &:nth-child(3)
    z-index: 2
  +sp-view
    margin: 20% -16% 0
    width: 136%

.mask_01
  animation: scale1 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1)
.mask_02
  animation: scale2 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1)
.mask_03
  animation: scale3 8s infinite cubic-bezier(0.215, 0.61, 0.355, 1)

@keyframes shown
  0%
    width: 0
  100%
    width: 100%
/* @keyframes slide2
  0%
    width: 0
  50%
    width: 100%
  100%
    width: 100% */

/* @keyframes slide3
  0%
    width: 0
  50%
    width: 0
  100%
    width: 100% */

/* @keyframes scale1
  0%
    transform: scale(1.2)
  24%
    transform: scale(1.2)
  40%
    transform: scale(1)
  90%
    transform: scale(1)
  100%
    transform: scale(1.2) */

/* @keyframes scale2
  0%
    transform: scale(1.1)
  24%
    transform: scale(1.1)
  40%
    transform: scale(1.2)
  75%
    transform: scale(1.2)
  100%
    transform: scale(1) */

/* @keyframes scale3
  0%
    transform: scale(1.1)
  75%
    transform: scale(1.1)
  100%
    transform: scale(1.2) */

</style>
