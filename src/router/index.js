import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lottery from "../views/Lottery.vue";
import Winner from "../views/Winner.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/lottery",
    name: "lottery",
    component: Lottery
  },
  {
    path: "/winner",
    name: "winner",
    component: Winner
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
