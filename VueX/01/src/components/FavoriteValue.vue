<template>
  <p>F</p>
  <h3>{{ counter }}</h3>
  <p>More ...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['counter/normalizedCounter'];
    }
  }
};
</script>
