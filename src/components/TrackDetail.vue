<template lang="pug">
  .container.with-margin
    .columns
      .column.is-3.has-text-centered
        figure.media-left(v-if="track.album")
          p.image
            img(:src="track.album.images[0].url")
          p
            button.button.is-primary.is-large
              span.icon.is-small(@click="selectTrack")
                i.fa.fa-play

      .column.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
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
import trackService from '@/services/track'
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        this.track = res.data
      })
  }
}
</script>

<style lang="scss" scope>
.with-margin {
  margin: 10px;
}
</style>
