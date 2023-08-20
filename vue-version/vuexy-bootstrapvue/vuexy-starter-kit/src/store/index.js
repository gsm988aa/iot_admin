import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ChuanCan: 123,
  },
  mutations: {
    updateChuanCan(state, value) {
      state.ChuanCan = value;
    }
  },
  actions: {
    setChuanCan({ commit }, value) {
      commit('updateChuanCan', value);
    }
  },
  getters: {
    getChuanCan(state) {
      return state.ChuanCan;
    }
  },

  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
})
