<template>
  <base-container title="Vuex">
  <the-counter></the-counter>
  <favorite-value></favorite-value>
    <button @click="addOne"> add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import FavoriteValue from './components/FavoriteValue.vue';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
  methods:{
    addOne(){
      this.$store.dispatch('increment');//same syntax as commit 
    }
  },
};

//Vuex detects changes on store states and the places where the value is used will be re-run
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
</style>