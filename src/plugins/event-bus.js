// Plugin = extender el comportamiento de Vue
// Emisor de eventos.
// =================
// Vue.prototype => añadimos un método $bus (el $ es paraque sea propio de Vue)
// este método '$bus' creará una nueva instancia de  Vue porque Vue tiene
// propiedades para emitir y recibir eventos. De este modo lo vamos a usar
// para emitir nuestros propios eventos y recibirlos de cualquier componente.
//
// Este será importado en el main.js

const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue()
}

export default eventBus
