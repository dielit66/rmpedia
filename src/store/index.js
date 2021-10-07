import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    characters: [],
  },
  mutations: {
    setCharacters(state,payload){
      state.characters = payload
    }
  },
  actions: {
    fetchCharacters(context) {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => context.commit('setCharacters',response.data.results));
    },

  },
  getters: {
    getCharacters(state){
      return state.characters
    }

  },
});
