<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(:class="isEmpty ? 'is-danger' : 'is-success'")
          slot(name="body") Algo va mal
</template>

<script>
export default {
  name: 'notify',
  props: ['isEmpty']
}
</script>

<style lang="scss" scoped>
.notification {
  margin: 10px;
  }
</style>
