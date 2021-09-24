const app = Vue.createApp({
  data() {
    return {
      courseGoal:'whatever',
      link:'https://github.com/miaris98',
      courseGoal1:'whatever1',
      courseGoal2:'whatever2',  
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
    }  
  }  
});

app.mount('#user-goal');