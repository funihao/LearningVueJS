<template lang="pug">

#app.columns
  .column.is-narrow
    .container.is-fluid
      .section
        img(src="./assets/logo.jpg")
        h1.title.is-size-4.has-text-primary Registro estación Platzi
        .content
          .field
            label.label.is-small.has-text-warning Fecha de nacimiento
            .control
              input.input(
                v-model="birthday"
                type="date"
              )
          .field
            label.label.is-small.has-text-warning Mes
            .control
              input.input(
                v-model="mes"
                type="text"
                placeholder="Cool de la Web"
              )
          .field
            label.label.is-small.has-text-warning Año
            .control
              v-model="ano"
              input.input(
                type="text"
                placeholder="FullStack JS"
              )
        .columns
          .column.is-6.is-offset-6
            .control
              button.button.is-primary  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enviar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        .columns
            p {{ edad }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      birthday: '',
      mes: '',
      ano: ''
    }
  },

  computed: {
    edad () {
      return new Date(new Date() - new Date(this.birthday)).getUTCFullYear() - 1970
    }
  },

  watch: {
    mes (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
