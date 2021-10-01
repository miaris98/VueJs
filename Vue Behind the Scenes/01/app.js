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
      //this.message = this.currentUserInput;
      this.message=this.$refs.userText.value;//refs are more resourcefull
    },
  },
  beforeCreate(){
    console.log('before_create');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('Bmount');
  },
  mounted(){
    console.log('Mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated(){
    console.log('updated');
  },
  beforeUnmount(){
    console.log('beforeUnmount');
  },
  unmounted(){
    console.log('unmounted');
  },
});

app.mount('#app');

setTimeout(function () {
app.unmount();  
},3000);



const app2 = Vue.createApp({
  template: `<p>{{Fmeal}}</p>
  `,
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