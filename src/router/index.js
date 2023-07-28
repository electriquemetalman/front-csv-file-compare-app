import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Competition from "@/views/Competition.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Competition",
    name: "Competition",
    component: Competition,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;