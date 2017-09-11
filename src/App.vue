<template lang="pug">
  #app
    section.hero.is-primary
      .hero-body
        h1.title Tareas
        h2.subtitle Control de tareas con Vue.JS

    section.section
      .container.level
        .level-left
          .level-item
            .field
              label.label.heading Tarea
              .control
                input.input.is-large(
                  v-model="newTask.title"
                  type="text"
                  placeholder="Título, nombre o definición de la tarea"
                  )
          .level-item
            .field
              label.label.heading Duración
              .control
                input.input.is-large(
                  v-model="newTask.time"
                  type="time"
                  pattern="[0-2][0-9]:[0-6][0-9]"
                  placeholder="hh:mm"
                  )
          .level-item
            .field
              p.label.heading &nbsp;
              .control
                .button.is-info.is-large.space(@click="addTask") Nueva
                .button.is-danger.is-large(@click="cancel") Borrar

    .container
      .tile
        p.title {{ name }}

    section.section(v-if="tasks.length")
      .container
        .content
          table.table.is-narrow
            thead.thead
              tr
                th Tarea
                th Duración
                th
            tbody
              tr(v-for="(task, index) in tasks")
                th(:title="task.title") {{ task.title }}
                th(:time="task.time ") {{ task.time }}
                th(:index="index ")
                  a.button.is-danger.is-outlined(@click="removeTask(index)")
                    span &times;
      .container
        .content
          hr.end-group
          h2 Tiempo total (hh:mm) = {{ totalTime }}

    section.section(v-else)
      .container
        .content
          hr.end-group
          h2 Aún no se han registrado tareas
</template>

<script>

export default {
  name: 'app',

  data () {
    return {
      name: 'Pepe Pérez',
      total: 0,
      tasks: [],

      newTask: {
        title: '',
        time: ''
      }
    }
  },

  created: function () {
    this.loadData()
  },

  computed: {
    totalTime () {
      let total = 0
      let totalTime = ''

      if (this.tasks.length) {
        for (var task in this.tasks) {
          total += 60 * parseInt(this.tasks[task].time)
          total += parseInt(this.tasks[task].time.substr(this.tasks[task].time.indexOf(':') + 1))
        }

        this.total = total

        total = total / 60
        totalTime = parseInt(total).toString()

        if (totalTime.length < 2) {
          totalTime = '0' + totalTime
        }

        let min = ((total - parseInt(total)) * 60).toFixed(0)

        if (min.length < 2) {
          min = '0' + min
        }

        totalTime = totalTime + ':' + min
      }

      return totalTime
    }
  },

  methods: {

    storeData () {
      window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    loadData () {
      this.tasks = JSON.parse(window.localStorage.getItem('tasks')) || []
    },

    addTask () {
      if (this.newTask.title === '' || this.newTask.time === '') {
        return
      }
      this.tasks.push({title: this.newTask.title, time: this.newTask.time})
      this.newTask.title = ''
      this.newTask.time = ''
      this.storeData()
    },

    removeTask (index) {
      console.log(index)
      this.tasks.splice(index, 1)
      this.storeData()
    },

    cancel () {
      this.newTask.title = ''
      this.newTask.time = ''
    }
  }

}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}

</style>
