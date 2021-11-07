<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2> 
  </section>
</template>

<script>
//import {ref} from 'vue';
import {reactive} from 'vue'; // ref for objects
export default {
  setup(){
    // const uAge = ref(23);
    // const uName = ref('Dennis');
    const user =reactive({
      name:'Dennis',
      age:23,
    })

    setTimeout(function (){
      user.name='dennis';
      user.age=24;
    } ,2000)
    return{
      user:user,
    };
  }
  // data() {
  //   return {
  //     userName: 'Dennis',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>