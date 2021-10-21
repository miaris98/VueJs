export default {
  increment(state) {
    // rootState can be used inside local module
    //mutations works with synch code
    state.counter++;
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  }
};
