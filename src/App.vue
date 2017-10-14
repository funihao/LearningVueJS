<template lang="pug">
  #app
    pm-header

    div.container.has-text-centered
      h2 Contador
      p {{ count }} {{ stringTest }}
      p {{ getDouble }}

      div
        button.button.is-success(@click="increment") +
        button.button.is-warning(@click="decrement") -

      div
        button.button.is-large.is-info(@click="increment10") +10
        button.button.is-large.is-info.is-outlined(@click="incrementAsync") +Async

    pm-footer
</template>

<script>
import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'app',

  data () {
    return {
      test: 'test'
    }
  },

  components: { PmFooter, PmHeader },

  computed: {
    ...mapState(['count']),

    ...mapGetters(['getDouble']),

    stringTest () {
      return this.test
    }
  },

  methods: {
    ...mapMutations(['increment', 'decrement']),

    increment10 () {
      this.$store.commit('increment', {
        number: 10
      })
    },

    incrementAsync () {
      this.$store.dispatch('incrementAsync', {
        number: 2
      })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
