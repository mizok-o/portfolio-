<template lang="pug">
  .sns-container
    .sns-item
      a.header-link(href="https://www.instagram.com/s_enposhi?ref=badge", target="_blank") Instagram
    .sns-item
      a.header-link(href="https://www.dribbble.com/iemon", target="_blank") Dribbble
    .sns-item
      a.header-link(href="https://www.facebook.com/KotaroMizoguchi.965", target="_blank") Facebook
    .sns-item
      a.header-link(href="https://twitter.com/mizokou2", target="_blank") Twitter
</template>
<style lang="sass">
.sns-container
  display: flex
  justify-content: flex-end
  margin: 120px 10% 0 0
.sns-item
  font-size: 24px
  margin-right: 8%
  &:last-child
    margin-right: 0

</style>
