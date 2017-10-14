import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  getters: {
    getDouble (state, getters) {
      return state.count * 2
    }
  },

  mutations: {
    increment (state, payload = {}) {
      state.count += payload.number || 1
    },

    decrement (state) {
      state.count--
    }
  },

  actions: {
    incrementAsync (context, payload) {
      setTimeout(() => {
        context.commit('increment', payload)
      }, 2000)
    }
  }
})

export default store