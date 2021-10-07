<template>
  <div class="char-card">
    <img :src="character.image" alt="Character pic" />

    <div class="char_info">
      <h2>Info</h2>
      <div class="char_add-info">
      <span>{{ character.name }}</span>
      <span>{{ character.location.name }}</span>
      <span>{{ character.species }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Character",
  data() {
    return {
      character: [],
    };
  },
  methods: {
    getTodos() {
      axios
        .get(
          "https://rickandmortyapi.com/api/character/" + this.$route.params.id
        )
        .then((response) => (this.character = response.data));
    },
  },
  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
template {
}
.char-card {
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
  background-color: rgba(0, 227, 255, 0.68);
  width: 58%;
  margin: 35px auto 0;

  border: 4px solid rgba(219, 218, 218, 0.56);
  border-radius: 20px;
}
.char_info {
  display: flex;
  flex-direction: column;
  text-align: center;

  border: 2px solid rgba(219, 218, 218, 0.56);
  font-size: 20px;

  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  width: 50%;
  align-items: center;
  border-radius: 18px;
}
.char_add-info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 32%;
  margin-top: 18%;
}


img {
  border-radius: 20px;
}
template {
}
</style>