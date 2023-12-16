import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ChuanCan: 'admin',
    isChartVisible: false,
    selectedTemperature: 30,
    emailAddress: '807683237@qq.com', // 用户的邮箱
  },
  mutations: {
    updateChuanCan(state, value) {

      state.ChuanCan = value;

      state.ChuanCan = value
    },
    updateChartVisibility(state, isVisible) {
      state.isChartVisible = isVisible
    },
    setEmailAddress(state, email) {
      state.emailAddress = email
    },
  },
  actions: {
    setChuanCan({ commit }, value) {
      commit('updateChuanCan', value);
      commit('updateChuanCan', value)
    },
    setChartVisibility({ commit }, isVisible) {
      commit('updateChartVisibility', isVisible)
    },
    setselectedTemperature({ commit }, temperature) {
      commit('updateselectedTemperature', temperature)
    },
    setEmailAddress({ commit }, email) {
      commit('setEmailAddress', email)
    },
  },
  getters: {
    getChuanCan(state) {
      return state.ChuanCan;
      return state.ChuanCan
    },
    getChartVisibility(state) {
      return state.isChartVisible
    },
    getselectedTemperature(state) {
      return state.selectedTemperature
    },
    getemailAddress(state) {
      return state.emailAddress
    },
  },

  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
})
