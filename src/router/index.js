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
    path: '/admin/catcafes/signin',
    name: 'admin-signin',
    component: () => import('../views/admin/AdminSignin.vue')
  },
  {
    path: '/admin/catcafes',
    name: 'admin-cat-cafes',
    component: () => import('../views/admin/AdminCatCafe.vue')
  },
  {
    path: '/admin/catcafes/new',
    name: 'admin-cat-cafes-new',
    component: () => import('../views/admin/AdminCatCafeNew.vue')
  },
  {
    path: '/admin/catcafes/:id/edit',
    name: 'admin-cat-cafe-edit',
    component: () => import('../views/admin/AdminCatCafeEdit.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
