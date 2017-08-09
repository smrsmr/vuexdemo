/**
 * Created by Administrator on 2017-08-06 006.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}
const getters = {
  count: function (state) {
    return state.count
  }
}
const actions = {
  addAction (context) {
    context.commit('add', 10)
    setTimeout(() => { context.commit('reduce') }, 3000)
    console.log('我先执行')
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
