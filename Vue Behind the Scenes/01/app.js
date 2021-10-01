const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  data(){
    return{
      Fmeal:'pizza',
    };
  },
});
app2.mount('#app2');





//vanilla javascript

let message="hello";
let Lmessage=message+"world";
console.log(Lmessage);
message="Hello!!!";
console.log(Lmessage);// it is not printing the updated value


const data ={
  message:'Hello!',
  longme:'hello world',
};
const handler = {
  set(target,key,value){
    if(key==='message'){
      target.longme=value+'world!';
    }
    target.message=value;
  }
};
const proxy = new Proxy(data,handler);
proxy.message="Hello!!!";