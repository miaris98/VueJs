export default {
  login() {},
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCkxI5H3-9PMaPL-1KO6SjcBmtk-fpJJW0',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );
    const responseData = await response.json();
    if(!response.ok){
        console.log(responseData);
        const error = new Error(responseData.message || 'Failed to Auth')
        throw error;
    }
    context.commit('setUser',{
        token:responseData.idTOken,
        userId:responseData.localId,
        tokenExpiration:responseData.expiresIn
    })
  }
};