const app = Vue.createApp({
  data() {
    return {
      courseGoal:'whatever',
      link:'https://github.com/miaris98',
      courseGoal1:'whatever1',
      courseGoal2:'whatever2',
      Htmlele:'<h1>whatever3</h1>'  
    };
  },
  methods: {
    outputGoal(){
      const randNum=Math.random();
      if(randNum<0.5){
        return this.courseGoal1
      }else{
        return this.courseGoal2
      }
    },
    Htmlelement(){
     return this.Htmlele
    }  
  }  
});

app.mount('#user-goal');