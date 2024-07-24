import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: '/',
      component: () => import('@/pages/Home.vue')
   },
   {
      path: '/login',
      component: () => import('@/pages/Registration.vue')
   },
   {
      path: '/about',
      component: () => import('@/pages/About.vue')
   },
]

export default createRouter({
   history: createWebHistory,
   routes
})