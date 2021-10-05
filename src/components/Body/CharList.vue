<template>
  <main>
    <div class="all-characters">
      <div
        class="character_card"
        v-for="character in characters"
        :key="character.id"
      >
        <div class="character_info">
          <img class="character_image" :src="character.image" alt="" />
          <div class="character_name">{{ character.name }}</div>
          <div class="character_add-info">
            <span>{{ character.gender }}</span>
            <span>{{ character.status }}</span>
            <span>{{ character.species }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "CharList",
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => (this.characters = response.data.results));
  },
};
</script>

<style scoped>
.all-characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5%;
}
.character_image {
  margin: 0 auto;
}

.character_card {
  background-color: #00e3ff;
  width: 30%;
  margin-top: 35px;
}
.character_info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.character_name {
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
}
.character_add-info {
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  padding-bottom: 16px;
}
</style>
