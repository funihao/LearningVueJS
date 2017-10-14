<template lang="pug">
  .media(v-if="track && track.album")
    .media-content.has-text-centered
      figure.centered.image.is-128x128
        img(:src="track.album.images[0].url")
      p
        strong {{ track.name }}
        small &nbsp;[{{ track.duration_ms | ms-to-mm }}]
      p
        audio(controls, :src="track.preview_url")
</template>
card
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['track'])
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
