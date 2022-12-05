import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../views/main-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: "blob",
    component: () => import ("../views/blog-page.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
