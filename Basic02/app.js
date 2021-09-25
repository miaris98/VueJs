const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      Cname: '',
    };
  },
  methods:{
    add(num){
      this.counter=this.counter+num;
    },
    reduce(num){
      this.counter=this.counter-num;
    },
    Printer(event){
      this.name=event.target.value;//event is an object passed by the DOM by default when an event lister is set
    },
    Conname(){
      this.Cname=this.name
    }

  }
});

app.mount('#events');
