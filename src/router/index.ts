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
    name: "blog",
    component: () => import ("../views/blog-page.vue")
  },
  {
    path: '/blog/:id',
    name: 'one-blog',
    component: () => import ('../views/one-blog-page.vue')
  },
  {
    path: '/recipes-page',
    name: 'recipes',
    component: () => import ('../views/recipes-page.vue')
  },
  {
    path: '/recipes-page/:id',
    name: 'one-recipe',
    component: () => import("../views/one-recipe.vue")
  },
  {
    path: '/register-page',
    name: 'register',
    component: () => import("../views/register-page.vue")
  },
  {
    path: "/login-page",
    name: "login",
    component: () => import ("../views/login-page.vue")
  },
  {
    path: "/profile-page",
    name: "profile",
    component: () => import ("../views/profile-page.vue"),
  },
  {
    path: "/subscribe-ded-moroz",
    name: "ded",
    component: () => import("../views/test.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes
})

export default router
