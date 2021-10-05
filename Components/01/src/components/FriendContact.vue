<template>
  <li>
    <h2>{{ name }}{{ friendIsFav ? "" : "(Favorite)" }}</h2>
    <button @click="changeFav">Change Favorite</button>
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
  //props: ["name", "phoneNumber", "emailAddress","isFav"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFav: {
      type: Boolean,
      required: false,
      default: false, //it can be a fuction and you can have a validator
    },
  },

  emits:['toggle-favorite'],//props for event listening
  /*
  emits: {
    "toggle-favorite": function(id) {
      if (id) {
        return true;
      } else {
        console.warn("id is missing");
        return false;
      }
    },
  },*/
  data() {
    return {
      details: false,
      friendIsFav: this.isFav,
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
    changeFav() {
      this.friendIsFav = !this.friendIsFav;
    },
  },
};
</script>
