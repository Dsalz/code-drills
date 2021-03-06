import Vue from "vue";
import Router from "vue-router";

import problemRoutes from "./problem";
import profileRoutes from "./profile";
import homeRoutes from "./home";
import NotFound from "../views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: {
        template: "<router-view></router-view>"
      },
      children: [...homeRoutes, ...problemRoutes, ...profileRoutes]
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
