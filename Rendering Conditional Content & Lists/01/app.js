const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalvalue: '',
    };
  },
  methods: {
    putGoal() {
      this.goals.push(this.goalvalue)
    },
  },
});

app.mount("#user-goals");
