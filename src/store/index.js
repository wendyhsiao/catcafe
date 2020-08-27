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
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      },
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const {data} = await adminAPI.getCurrentUser()
        commit('setCurrentUser', data)
        return true
      } catch (error) {
        console.log('error', error)
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
