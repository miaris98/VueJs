export default {
  finalCounter(state) {
    // can get getters as parameter
    return state.counter;
  },

  normalizedCounter(state, getters) {
    const Fcounter = getters.finalCounter;
    console.log('do staff with ' + Fcounter);
    return Fcounter;
  }
};
