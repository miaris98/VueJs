const app = Vue.createApp({
  data() {
    return {
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
});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click = "toggleDetails">{{details ? 'HIDE' : 'SHOW'}} Details</button>
    <ul v-if = "details">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      details: false,
      friend: {
        id: "1",
        name: "Whatever",
        phone: "210 321 0123 231",
        email: "whatever@somemail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
  },
}); //tag name of "html" element of component

app.mount("#app");
