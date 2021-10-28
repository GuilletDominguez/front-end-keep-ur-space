import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AdminLayout from "../layout/Admin.vue";
import Login from "../views/Login.vue";
import Reserve from "../views/Reserve.vue";
import Register from "../views/Register.vue";
import Perfil from "../views/Perfil.vue";
import Historico from "../views/Historico.vue";
import UnreadRequest from '../views/UnreadRequest.vue'
import Calendar from '../views/Calendar.vue'
import ListaUsuario from "../views/ListaUsuario.vue";
import Agenda from "../views/Agenda.vue";




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

        path: "/listaUsuario",
        name: "ListaUsuario",
        component: ListaUsuario,
      },

      {
        path: "/historico",
        name: "Historico",
        component: Historico,
      },

      {

      path: "/register",

        name: "Register",
        component: Register,
      },
      {
        path: "/perfil/:id",
        name: "Perfil",
        component: Perfil,
        props:true
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


    {
    path: '/request/:id',
    name: 'SingleRequest',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleRequest.vue')
  },
  {
    path: '/unreadrequest',
    name: 'UnreadRequest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UnreadRequest.vue')

  },
  {
    path: '/calendar',
    name: 'Calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue')

  },
  {
    path: '/agenda',
    name: 'Agenda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Agenda.vue')

  },
  {
    path: '/listausuario',
    name: 'ListUsers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaUsuario.vue')

  }

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
