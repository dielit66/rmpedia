<template>
  <main>
    <div class="search-form">
      <input type="text" placeholder="Search" v-model="search" />
      <select v-model="status" name="select">
        <option value="" selected>All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <div class="all-characters">
      <div
        class="character_card"
        v-for="character in searchCharacter"
        :key="character.id"
      >
        <div class="character_info">
          <img class="character_image" :src="character.image" alt="" />
          <div class="character_name">
            <router-link to="/character">{{ character.name }}</router-link>
          </div>

          <div class="character_add-info">
            <span>{{ character.gender }}</span>
            <span>{{ character.status }}</span>
            <span>{{ character.species }}</span>
          </div>
        </div>
      </div>
    </div>
    <button v-if="page !== 34" @click="loadMore" class="load-more_button">
      Ещё
    </button>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "CharList",
  data() {
    return {
      search: "",
      characters: [],
      page: 1,
      status: "",
    };
  },
  beforeMount() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then((response) => (this.characters = response.data.results));
    },
    loadMore() {
      this.page++;
      axios

        .get("https://rickandmortyapi.com/api/character/?page=" + this.page)
        .then((response) => this.characters.push(...response.data.results));
      console.log(this.characters);
    },
  },
  computed: {
    searchCharacter() {
      return this.characters.filter((character) => {
        return (
          character.name.toLowerCase().includes(this.search.toLowerCase()) &&
          character.status.toLowerCase().includes(this.status.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-form {
  display: flex;
  margin-top: 18px;
  width: 96%;
}
.search-form select {
  border: solid 4px rgba(0, 227, 255, 0.68);
  outline: solid 1px rgba(219, 218, 218, 0.56);
  font-size: 20px;
  height: 48px;
  border-radius: 8px;
  width: 20%;
}

.search-form input {
  margin-right: 2%;
  height: 48px;
  width: 78%;

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
.load-more_button {
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 25px;
  height: 48px;
  width: 10%;
  border-radius: 8px;
  font-size: 20px;
  border: solid 4px rgba(0, 227, 255, 0.68);
  outline: solid 1px rgba(219, 218, 218, 0.56);
}
</style>
