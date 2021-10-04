<template>
  <main>
    <div class="app-wrapper">
      <img :src="info" alt="Rick" />
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "CharList",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character/1")
      .then((response) => (this.info = response.data.image));
  },
};
</script>

<style scoped></style>
