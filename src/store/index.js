import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    token: ""
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    }
  },
  mutations: {
    setUser(state, user) {
      state.username = user.user.username;
      state.token = user.token;
    },
    clearUser(state) {
      state.username = "";
      state.token = "";
    }
  }
});
