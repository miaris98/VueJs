<template>
  <li>
    <h2>{{ name }}{{friendIsFav==='1' ? '(Favorite)' : ''}}</h2>
    <button @click="changeFav"> Change Favorite</button> 
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
  props: ["name", "phoneNumber", "emailAddress","isFav"],
  data() {
    return {
      details: false,
      friend: {
        id: "1",
        name: "whatever1",
        phone: "101010101010",
        email: "some@mail.com",
      },
      friendIsFav:this.isFav,
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
    changeFav(){
      this.friendIsFav= !this.friendIsFav;
    }
  },
};
</script>
