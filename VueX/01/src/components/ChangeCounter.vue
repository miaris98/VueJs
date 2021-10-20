<template>
  <button @click="increment">add 1</button>
  <button @click="increase({ value: 11 })">add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne(){
    //     this.$store.dispatch('increase' , {value:10});
    // }
    ...mapActions(['increment', 'increase']) // ... merge operator to merge the actions to methods object
  }
};
</script>
