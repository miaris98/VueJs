const app = Vue.createApp({
  data() {
    return {
      courseGoal:'whatever',
      link:'https://github.com/miaris98'  
    };
  },
  methods: {
    outputGoal(){
      const randNum=Math.random();
      if(randNum<0.5){
        return 'whatever1'
      }else{
        return 'whatever2'
      }
    }  
  }  
});

app.mount('#user-goal');