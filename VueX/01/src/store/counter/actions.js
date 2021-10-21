export default {
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
  login(){
    
  }
};
