import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AdminLayout from "../layout/Admin.vue";
import Login from "../views/Login.vue";
import Reserve from "../views/Reserve.vue";
import Register from "../views/Register.vue";
import Perfil from "../views/Perfil.vue";

const routes = [
  {
    path: "/",
    name: "AdminLayout",
    component: AdminLayout,

    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
      {
        path: "/perfil",
        name: "Perfil",
        component: Perfil,
      },
      {
        path: "/request",
        name: "Request",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Request.vue"),
      },
      {
        path: "/reserve",
        name: "Reserve",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Reserve.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
