<template>

</template>
<style lang="sass">
$phone: "(max-width: 750px)"
$exept-phone: "(min-width: 751px)"
$tablet-portrait: "(max-width: 768px)"
$tablet-desktop: "(max-width: 992px)"
$large-desktop: "(max-width: 1200px)"
$big-desktop: "(max-width: 1580px)"
$super-desktop: "(min-width: 1800px)"

$small-desktop-only: "(min-width: 751px) and (max-width: 992px)"
$medium-desktop-only: "(min-width: 993px) and (max-width: 1200px)"
$large-desktop-only: "(min-width: 1201px)"

$medium-desktop-over: "(min-width: 993px)"

$non-retina: "screen and (-webkit-max-device-pixel-ratio: 1)"
$retina: "screen and (-webkit-min-device-pixel-ratio: 2)"

=respond-to($media)
  @media #{$media}
    @content

=sp-view
  +respond-to($phone)
    @content
=pc-view
  +respond-to($exept-phone)
    @content
=pc-sm-view
  +respond-to($tablet-desktop)
    @content
=pc-md-view
  +respond-to($large-desktop)
    @content
=pc-lg-view
  +respond-to($big-desktop)
    @content

=pc-sm-view-only
  +respond-to($small-desktop-only)
    @content
=pc-md-view-only
  +respond-to($medium-desktop-only)
    @content
=pc-lg-view-only
  +respond-to($large-desktop-only)
    @content

=pc-md-view-over
  +respond-to($medium-desktop-over)
    @content

=clearfix
  *zoom: 1
  &:before,
  &:after
    display: table
    content: ''
  &:after
    clear: both

=box-sizing
  -webkit-box-sizing: border-box
  -moz-box-sizing:    border-box
  box-sizing:         border-box
</style>
