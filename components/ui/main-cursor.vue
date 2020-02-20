<template lang="pug">
  .main-cursor
    .cursor#cursor
    .follower#follower
</template>
<script>
if (process.client) {
let cursorR = 4;  //カーソルの半径
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得


document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
},false);

const follower = document.getElementById('follower');
let hovFlag = false;
document.addEventListener('mousemove', function(e) {
  if (!hovFlag) {
    follower.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  }
});

const link = document.querySelectorAll('a');
for (let i = 0; i < link.length; i++) {

    link[i].addEventListener('mouseover', function (e) {
      hovFlag = true;
      follower.classList.add('hov')
      let rect = e.target.getBoundingClientRect();
      let posX = rect.left + (rect.width / 2);
      let posY = rect.top + (rect.height / 2);

      follower.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    link[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        follower.classList.remove('hov');
    });
}
}
</script>
<style lang="sass">
.cursor
  position: fixed
  top: -8px
  left: -6px
  width: 1%
  height: 1.5%
  background: #fff
  border-radius: 50%
  z-index: 22
.follower
  pointer-events: none
  position: fixed
  top: -24px
  left: -24px
  width: 72px
  height: 72px
  background-color: #f1C444
  opacity: 0.5
  border-radius: 50%
  transition: all .4s
  z-index: 22
.hov
  width: 0
  height: 0
</style>
