import { createStore } from 'vuex';
import { rootMutations } from './mutations.js';
import { rootActions } from './actions.js';
import { rootGetters } from './getters.js';
import counterModule from './counter/index.js';
const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    }; //application data
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions
});
export default store;
