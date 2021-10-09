<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsvalid">
        <h2>Input is invalid</h2>
        <button @click="confirm">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsvalid = true;
      }
    },
    confirm() {
      this.inputIsvalid = false;
    },
  },
};
</script>
