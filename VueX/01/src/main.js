import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    }; //application data
  },
  mutations: {
    increment(state) {
      //mutations works with synch code
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },

    setAuth(state,payload){
       state.isLoggedIn= payload.isAuth;
    },


  },
  getters: {
    finalCounter(state) {
      // can get getters as parameter
      return state.counter;
    },

    normalizedCounter(state, getters) {
      const Fcounter = getters.finalCounter;
      console.log('do staff with ' + Fcounter);
      return Fcounter;
    },

    userIsAuth(state){
      return state.isLoggedIn;
    }
  },
  actions: {
    increment(context) {
      // can ran async code
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      // can ran async code
      setTimeout(function() {
        context.commit('increase', payload);
      }, 2000);
    },

    login(context){
      context.commit('setAuth',{isAuth:true});
    },

    logout(context){
      context.commit('setAuth',{isAuth:false});
    },
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
