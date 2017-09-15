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
