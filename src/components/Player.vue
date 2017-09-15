<template lang="pug">
  .media
    .media-content.has-text-centered
      .content
        figure.centered.image.is-128x128
          img(:src="track.album.images[0].url")
        p
          strong {{ track.name }}
          small &nbsp;[{{ track.duration_ms }}]
        p
          audio(controls, :src="track.preview_url")
</template>
card
<script>
export default {

  data () {
    return {
      track: {}
    }
  },

  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scope>
  figure.centered {
    margin: 0 auto;
      img {
        border-radius: 50%;
      }
  }
</style>
