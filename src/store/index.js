import Vue from 'vue'
import Vuex from 'vuex'
import adminAPI from '../apis/admin.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      },
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const {data} = await adminAPI.getCurrentUser()
        commit('setCurrentUser', data)
      } catch (error) {
        console.log('error', error)
      }
    }
  },
  modules: {
  }
})
