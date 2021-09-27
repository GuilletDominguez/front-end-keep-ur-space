import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdminLayout from '../layout/Admin.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'AdminLayout',
    component: AdminLayout,
    children:[{
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
   
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
 ],

  },
  {
    path: '/login',
    name: 'Login',
    component: Login,


  },]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
