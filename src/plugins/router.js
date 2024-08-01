import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: '/about',
      component: () => import('@/views/About.vue')
   },
   {
      path: "/home",
      component: () => import('@/views/Home.vue')
   },
   {
      path: "/signup",
      component: () => import('@/pages/SignUp.vue')
   }
]

export default createRouter({
   history: createWebHistory(),
   routes
})