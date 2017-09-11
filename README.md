# Learning Vue.js

> App Curso Profesional de Vue.js en Platzi con Nacho Anaya

## Manipulacion del DOM con Vue.js

Este ejercicio consiste en aprender a usar la funcionalidad de renderizado declaritivo que provee Vue.js

Para eso vamos a crear una pequeña aplicacion web que nos permita hacer seguimiento de tareas utilizando el local storage del Browser.

De esta manera vamos a reforzar los concepto mas basicos que nos ofrece Vue.js para manipular e interactuar con el DOM.

### Ejercicios
1. Crear dentro de data una propiedad "name" de tipo String y una propiedad tasks de tipo de Array.
2. Agregar una expresion para mostrar el valor de name y utilizar la directiva apropieda para para mostrar en una lista cada uno de los elementos dentro de task. Cada "task" es un objeto con una propiedad "title" y otra "time". Agregemos las expresiones necesarias para que en cada tarea podamos visualizar ambas propiedades.
3. Agregar funcionalidad para crear una nueva tarea:
  1. Vamos a necesitar una nueva propiedad llamada "newTask" que sea un Object. Dentro de este objeto tambien agregamos una propiedad "tilte" de tipo String y una propiedad "time" de tipo Number. Recorda inicializar las propiedades con valores default.
  2. Vamos a crear un metodo llamado "addTask" que agregue una nueva tarea al array "tasks". Una vez agregada tambien va a reiniciar los valores dentro de "newTaks". Ten en cuenta que antes de agregar la propiedad debemos chequear con los valores de "newTask.title" y "newTask.time" existan (sean distintos de "falsy"). Por otro lado es importante que cada elemento nuevo que agregemos al array de "tasks" sea un objeto nuevo y no la instancia de "newTask".
  3. Vamos a agregar el HTML necesario, necesitamos dos "inputs" y un "button". Tambien debemos agregar las diretivas correspondientes para enlazar el codigo con la vista.
4. Creamos tambien una funcionalidad para cancelar, para eso debemos crear un metodo llamado "cancel" que simplemente reinicie los valores de las propiedades de newTask. Recordemos agregarun button de HTML donde enlazar este nuevo metodo
5. Es momento de saber cuantas horas llevamos trabajadas, para eso vamos a crear una computed property llamada "totalTime" donde se recorran todas las tareas y se calculo el total del tiempo trabajado. Tambien vamos agregar un elemento HTML con la expresion necesaria para visualizar la proopiedad.
6. Vamos a integrar la app con el local storage del browser. Dentro del metodo "addTask", vamos a guardar toda la lista de tareas en dicho storage usando este metodo: "localStorage.setItem('tasks', JSON.stringify(this.tasks))".
7. Guardando las tareas en el browser vamos a poder persistir la informacion aunque estemos cerrando o refrezcando la pagina. Debemos tambien al momento de crearse el componente, leer esta informacion para poder cargar la lista de tareas. Para eso dentro del hook "created", escribimos el siguiente codigo: "this.tasks = JSON.parse(localStorage.getItem('tasks')) || []"
8. Lo ultimo que nos queda es poder eliminar las tareas que ya no queremos. Para eso vamos a crear un metodo que se llame "removeTask". Este metodo debe recibir por parametro el indice de la tarea y podemos utilizar ese indice (en conjunto con el metodo "splice" de Array) para eliminar el elemento. Recordemos tambien que vamos a tener que agregar un boton por cada tarea y cada boton se encarga de llamar al metodo "removeTask" enviando por parametro el indice correspondiente. Recordemos invocar la funcionalidad que ya pusimos en "addTask", para actualizar el local storage del Browser.
9. Por ultimo vamos a mejorar la UI, cuando no haya tareas podemos mostrar un mensaje que indica que no hay ninguna tarea cargada y por otro lado ocultar el lista vacia
