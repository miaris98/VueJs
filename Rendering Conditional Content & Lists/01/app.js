const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalvalue: "",
    };
  },
  methods: {
    putGoal() {
      this.goals.push(this.goalvalue);
    },
    removegoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
