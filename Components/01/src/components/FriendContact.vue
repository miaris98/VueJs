<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ details ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="details">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      details: false,
      friend: {
        id: "1",
        name: "whatever1",
        phone: "101010101010",
        email: "some@mail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
  },
};
</script>
