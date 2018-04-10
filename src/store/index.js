import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  count: 0,
  history: [],
  mylist: '12345',
  info: {
    id: 'guokeke'
  },
  todos: [
    {id: 1, text: '看书', done: true},
    {id: 2, text: '吃饭', done: false},
    {id: 3, text: '睡觉', done: true}
  ]
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
