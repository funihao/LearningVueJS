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
Una librería para manejar estados centralizados. La idea es tener un almacén central donde actualizamos estados y estos se pueden propagar a todos los componentes sin importar si son padres, hijos o componentes que no tienen relación ninguna. Lo instalamos con:

```js
npm i -S vuex
```

### Babel Preset Stage2
Vamos a instalar el '`preset stage-2`' para poder usar los 'spread operator' de ECMAScript 2015 (ES6). Tres puntos antes de una variable.
```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
```
Esto lo usaremos para extender la 'computed properties' y así poder añadir otras que no estén en el `store`.

Lo instalamos con:

```js
npm i -D babel-preset-stage-2      
```

### Estado (**State**)
En el `store.js` creamos el *'store'* y creamos el *'state'* que contendrá todas las variables que deben estar accesibles para todos los componentes. En el *'state'* crearemos un objeto `track` que estará disponible para todos.

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
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
    track: {}
  },

  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  }
})

export default store
```

### Actions
A través de ellas podemos gestionar la interacción con el usuario y esto dará lugar a cambios de estado mediante las mutaciones.

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },

  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  }
}),

actions: {
  getTrackById (context, payload) {
    return trackService.getById(payload.id)
      .then(res => {
        context.commit('setTrack', res.data)
        return res
      })
  }
}
```


### Getters
Son propiedades calculadas (`*'computed'*`) en el `store`.

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },

  getters: {
    trackTitle (state) {
      return (!state.track.name) ? '' : `${state.track.name} - ${state.track.artists[0].name}`
    }
  },

  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  }
}),

actions: {
  getTrackById (context, payload) {
    return trackService.getById(payload.id)
      .then(res => {
        context.commit('setTrack', res.data)
        return res
      })
  }
}
```

## Nuxt.js
Creamos otro repositorio ([platzi-music-nuxt](https://github.com/funihao/LearningNuxtJS)) para trabajar con [Nuxt,js](https://nuxtjs.org/).


# Deploy con Now
Vamos a usar [Now](https://zeit.co/now) para servir nuestra aplicación. Para ello tenemos que tener instalado *_'Now'_*.

```sh
npm install -g now
```

También necesitamos otro servidor.

```sh
npm i -S serve
```

Modificamos el `package.json` para introducir un nuevo script que `now` va a buscar, `start`.

```json
{
  // ...
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules",
    "start": "serve --single"
  }

```

Para poder hacer el _'deploy'_ debemos construir la aplicación para producción. Quitamos del `.gitignore` la carpeta _'dist/'_ para que se suba al repositorio.

```sh
npm build
```

Ahora solo necesitamos ejecutar `now` en la terminal y el se engargara de todo.

# Internalización con vue-i18n
Internalización es adaptar nuestra `app` o nuestro site para diferentes idiomas.
Para esto vamos a usar el paquete `vue-i18n` que lo instalamos como dependencia:

```sh
npm i -S vue-i18n
```
