import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: false
  },
  mutations: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode
    }
  },
  actions: {
    toggleTheme({ commit }) {
      commit('toggleTheme')
    }
  }
})