<template lang="pug">
  .main-cursor
    .cursor#cursor
    .follower#follower
</template>
<script>
export default{}
if (process.client) {
let cursorR = 4;
const follow = document.getElementById('cursor');
let hovFlag = false;
document.addEventListener('mousemove', function(e) {
  if (!hovFlag) {
    follow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  }
});
//
// const link =
//   document.querySelectorAll('a');
// for (let i = 0; i < link.length; i++) {
//
//     link[i].addEventListener('mouseover', function (e) {
//       hovFlag = true;
//       follow.classList.add('hov')
//       let rect = e.target.getBoundingClientRect();
//       let posX = rect.left + (rect.width / 2);
//       let posY = rect.top + (rect.height / 2);
//
//       follow.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
//
//     });
//     link[i].addEventListener('mouseout', function (e) {
//         hovFlag = false;
//         follow.classList.remove('hov');
//     });
// }
}
</script>
<style lang="sass">
.cursor
  pointer-events: none
  position: fixed
  top: -12px
  left: -12px
  width: 24px
  height: 24px
  border-radius: 50%
  background-color: #eee
  z-index: 21
</style>
