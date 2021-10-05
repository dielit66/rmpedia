import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueRouter from "vue-router";

createApp(App).use(store, axios, VueRouter).mount("#app");
