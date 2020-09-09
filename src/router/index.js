import Vue from 'vue'
import VueRouter from 'vue-router'
import CatCafes from '../views/CatCafes.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store'

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
    path: '/admin/catcafes/signup',
    name: 'admin-signup',
    component: () => import('../views/admin/AdminSignup.vue')
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

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuth = store.state.isAuthenticated

  if (token && token !== tokenInStore) {
    isAuth = await store.dispatch('fetchCurrentUser')
  }

  const pathsWithoutAuthentication = ['admin-signin', 'admin-signup', 'cat-cafes', 'cat-cafe']
  if (!isAuth && !pathsWithoutAuthentication.includes(to.name)) {
    next('/admin/catcafes/signin')
    return
  }

  if (isAuth && to.name === ('admin-signin' || 'admin-signup')) {
    next('/admin/catcafes')
    return
  }
  
  next()
})

export default router
