const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value+ ' ';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    outputFull(){
      if(this.name==='')
      {return '';}
      return this.name + '' + "Whatever";

    },
  },
  computed:{//they are used like a data property not like methods
    fullname() {
      if(this.name==='')
      {return '';}
      return this.name + '' + "Whatever";
    }
  },
});

app.mount('#events');
