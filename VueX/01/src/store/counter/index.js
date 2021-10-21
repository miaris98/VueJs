import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
    namespaced:true,//namespace is counter as this was set on mudoles block on main Store  
    state() {
      return {
        counter: 0,
      };
    },
    mutations: mutations,
    actions: actions,
    getters: getters, 
  };
