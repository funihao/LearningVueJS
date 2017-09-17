<template lang="pug">
  .card(
    v-if="track && track.album",

    )
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")

    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}

      .content(v-if="track.preview_url")
        small {{ track.duration_ms / 1000 / 60}}
        nav.level
          .level-left
            a.level-item
              span.icon.is-small(@click="selectTrack")
                i.fa.fa-play
            a.level-item
              span.icon.is-small(@click="goToTrack(track.id)")
                i.fa.fa-expand
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },

  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    },

    goToTrack (id) {
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>

<style lang="css">
</style>
