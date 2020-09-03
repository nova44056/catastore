import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../components/store'
import home from '../components/home'
import login from '../components/login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/:storeName',
    name: 'store',
    component: store,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresVisitor: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
