import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index";

const routes = [

  {
    path: "/",
    name: "Index",
    component: Index,
  },

  {
    path: "/character/:id",
    name: "Character",

    component: () =>
      import( '../views/Character.vue'),
  },
];


const router = createRouter({

  history: createWebHashHistory(),
  routes,
});

export default router;
