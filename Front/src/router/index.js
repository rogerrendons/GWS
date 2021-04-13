import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/login.vue')
  },
  {
    path: '/supporters',
    name: 'support',
    component: () => import(/* webpackChunkName: "about" */ '../views/Supporters.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
  },

  {
    path: '/SupportersSupp',
    name: 'SupportersSupp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SupportersSupp.vue')
  },
  {
    path: '/SupportersUser',
    name: 'SupportersUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/SupportersUser.vue')
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router