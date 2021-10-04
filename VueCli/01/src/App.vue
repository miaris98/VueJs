<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li><friend-contact></friend-contact></li>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "whatever1",
          name: "whatever1",
          phone: "110101001011",
          email: "whatever1@somemailserver.com",
        },
        {
          id: "whatever2",
          name: "whatever2",
          phone: "110101001011",
          email: "whatever2@somemailserver.com",
        },
      ],
    };
  },
};
</script>