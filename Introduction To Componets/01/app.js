const app = Vue.createApp({
  data() {
    return {
      details: false,
      friends: [
        {
          id: "1",
          name: "Whatever",
          phone: "210 321 0123 231",
          email: "whatever@somemail.com",
        },
        {
          id: "2",
          name: "Whatever2",
          phone: "210 321 2222 231",
          email: "whatever2@somemail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
        this.details= !this.details;
    },
  },
});
app.mount("#app");
