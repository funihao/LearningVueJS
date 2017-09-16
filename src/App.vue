<template lang="pug">
  #app
    pm-header

    router-view

    pm-footer
</template>

<script>
import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

export default {
  name: 'app',

  components: { PmFooter, PmHeader }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
