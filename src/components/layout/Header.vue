<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong Platzi Music
          .nav-right.nav-menu
            router-link.nav-item(to="search") Buscar
            router-link.nav-item(to="about") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Música a tu gusto
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player'

export default {
  components: { PmPlayer }
}
</script>

<style lang="css">
</style>
