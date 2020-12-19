import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    rightMenu: {
      status: "none",
      top: "0px",
      left: "0px",
      list: []
    }
  },
  mutations: {
  },
  modules: {}
});
