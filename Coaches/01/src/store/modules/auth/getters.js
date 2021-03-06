export default {
  userId(state) {
    return state.userId;
  },
  token(state){
    return state.token;
  },
  isAuthenticated(state){
    return !!state.token; //!! converts to true boolean
  },
  didlogout(state){
    return state.didlogout;
  }
};
