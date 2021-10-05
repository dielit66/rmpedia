<template>
  <main>
    <input type="text" placeholder="Поиск..." />
    <div class="all-characters">
      <div
        class="character_card"
        v-for="character in characters"
        :key="character.id"
      >
        <div class="character_info">
          <img class="character_image" :src="character.image" alt="" />
          <div class="character_name">
            <a href="">{{ character.name }}</a>
          </div>
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
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
main input {
  margin-top: 18px;
  height: 48px;
  width: 96%;
  border-radius: 8px;
  font-size: 20px;
  border: solid 4px rgba(0, 227, 255, 0.68);
  outline: solid 1px rgba(219, 218, 218, 0.56);
  text-indent: 10px;
}
.all-characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.character_image {
  margin: 0 auto;
  padding-bottom: 6px;
  border-radius: 20px;
}

.character_card {
  background-color: rgba(0, 227, 255, 0.68);
  width: 30%;
  margin-top: 35px;
  padding-top: 16px;
  border: 4px solid rgba(219, 218, 218, 0.56);
  border-radius: 20px;
}
.character_info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.character_name {
  text-align: center;
  align-self: center;
  border: 2px solid rgba(219, 218, 218, 0.56);
  font-size: 20px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  width: 50%;
  border-radius: 18px;
}
.character_name a:hover {
  text-shadow: 1px 1px 1px rgba(69, 68, 68, 0.44);
}
.character_add-info {
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  padding-bottom: 16px;
}
</style>
