# Learning Vue.js

> App Curso Profesional de Vue.js en Platzi con Nacho Anaya

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Configuración

Algunas cosas que necesitamos ajustar para trabajar mas comodamente.

### webpack
Vamos a configurar las rutas para tener que escribir menos código y le diremos a webpack que extensiones de archivos debe considerar para procesar.

En el archivo de configuración `wewbpack.config.js`
```js
...
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, './src')
  },
  extensions: ['.js', '.vue']
},

```
Ahora podemos escribir `@` enlugar de `./src` y no será necesario añadir la extensión a los archivos `.js` o `.vue`.

## Servicios

Vue.js solo resuelve la vista. Para interactuar a nivel de 'backend' podemos usar `javascript` y estos archivos nospueden servir para cualquier framework que usemos.

Vamos pues a introducir el concepto de servicios. Crearemos una carpeta dentro de `src` con el nombre de `services`.

Para hacer peticiones _**API RES** _ se utilizaban peticiones _XMLHttpRequest_, ahora podemos usar _**Fetch API**_ pero no está implementada en todos los "browsers". Para solucionar este pequeño inconveniente usaremos la librería `trae`.

## Ejercicios

[Manipulación del DOM](http://github.com/funihao/LearningVueJS/tree/E-DOM)

## Vuex
Una librería para manejar estados centralizados.

La idea es tener un almacén central donde actualizamos estados y estos se pueden propagar a todos los componentes sin importar si son padres, hijos o componentes que no tienen relación ninguna.

### Babel Preset Stage2
Vamos a instalar el '`preset stage-2`' para poder usar los 'spread operator' de ECMAScript 2015 (ES6). Tres puntos antes de una variable.
```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
```
Esto lo usaremos para extender la 'computed properties' y así poder añadir otras que no estén en el `store`.

### Estado (**State**)
En el `store.js` creamos el *'store'* y creamos el *'state'* que contendrá todas las variables que deben estar accesibles para todos los componentes.

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  ... // mas código
})

export default store

```
### Mutations
*`'Mutations'`* contendrá todas las funciones o métodos que necesitamos para modificar (mutar) el estado de las variables del `state`.

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment (state, payload = {}) {
      state.count += payload.number || 1
    },

    decrement (state) {
      state.count--
    }
  }
})

export default store
```

### Actions
