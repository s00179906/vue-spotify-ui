import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Search from "../views/Search.vue";
import YourLibrary from "../views/YourLibrary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/library",
    name: "yourlibrary",
    component: YourLibrary
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
