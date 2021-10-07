import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import router from "./router";






createApp(App).use( store,axios).use(router).mount("#app");
