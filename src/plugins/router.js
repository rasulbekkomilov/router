import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: '/about',
      component: () => import('@/views/About.vue')
   },
]

export default createRouter({
   history: createWebHistory(),
   routes
})