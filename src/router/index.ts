import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (user.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
