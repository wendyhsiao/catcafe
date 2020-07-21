import Vue from 'vue'
import VueRouter from 'vue-router'
import CatCafes from '../views/CatCafes.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/catcafes'
  },
  {
    path: '/catcafes',
    name: 'cat-cafes',
    component: CatCafes
  },
  {
    path: '/catcafes/:id',
    name: 'cat-cafe',
    component: () => import('../views/CatCafe.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
