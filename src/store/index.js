import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    characters: [],
    page: 1,
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setMoreCharacters(state, payload) {
      state.characters.push(...payload);
    },
  },
  actions: {
    fetchCharacters(context) {
      axios

        .get("https://rickandmortyapi.com/api/character/")
        .then((response) =>
          context.commit("setCharacters", response.data.results)
        );
    },
    fetchMoreCharacters(context) {
      this.state.page++;

      axios

        .get(
          "https://rickandmortyapi.com/api/character/?page=" + this.state.page
        )
        .then((response) =>
          context.commit("setMoreCharacters", response.data.results)
        );
    },
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
  },
});
