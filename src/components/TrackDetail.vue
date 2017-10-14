<template lang="pug">
  .container.with-margin
    .columns
      .column.is-3.has-text-centered
        figure.media-left(v-if="track.album")
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            button.button.is-primary.is-large
              span.icon.is-small(@click="selectTrack")
                i.fa.fa-play

      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}

              nav.level
                .level-left
                  button.button.is-primary.level-item
                    span.icon.is-small(@click="selectTrack")
                      i.fa.fa-play
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('Track Loaded...')
        })
    }
  },

  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scope>
.with-margin {
  margin: 10px;
}

.button-bar {
  margin-top: 20px;
}
</style>
