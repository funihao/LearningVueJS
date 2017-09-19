<template lang="pug">
  .container.with-margin
    .columns
      .column.is-5.is-offset-4
        pm-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track'

export default {
  components: { PmTrack },

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
