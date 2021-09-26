const app = Vue.createApp({
  data() {
    return {
      boxAselected: false,
      boxBselected: false,
      boxCselected: false,
    };
  },
  methods: {
    boxselected(box) {
      if (box === "A") {
        this.boxAselected = true;
        alert("enterA");
      } else if (box === "B") {
        this.boxBselected = true;
        alert("enterB");
      } else if (box === "C") {
        this.boxCselected = true;
        alert("enterC");
      }
    },
  },
});
app.mount("#styling");
