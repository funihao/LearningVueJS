<template lang="pug">
  main
    transition(name="move")
      pm-notification(:isEmpty="showNotification" v-show="showNotification")
        p(slot="body") No se encontraron resultados

    transition(name="move")
      pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            v-model="searchQuery"
            type="text"
            placeholder="Buscar canciones"
          )
          a.button.is-info.is-large.space(@click="search") Buscar
          a.button.is-danger.is-large(@click="cancel") &times;

      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id === selectedTrack }"
              :track="t",
              @select="setSelectedTrack"
            )
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track'

import PmNotification from '@/components/shared/Notification'
import PmLoader from '@/components/shared/Ecualizer'

export default {
  name: 'app',

  components: { PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    // showNotification () {
    //   if (this.showNotification) {
    //     setTimeout(() => {
    //       this.showNotification = false
    //     }, 3000)
    //   }
    // }
  },

  methods: {

    cancel () {
      this.searchQuery = ''
    },

    search () {
      this.tracks = []

      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })

      this.searchQuery = ''
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px solid #23d160;
}

</style>
