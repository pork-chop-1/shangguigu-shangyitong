import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/home',
      component: () => import('@/pages/home/index.vue')
    },
    {
      name: 'hospital',
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue')
    },
    {
      path: '/',
      redirect: () => {
        return '/home'
      }
    }
  ],
  // https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    }
  }
})

export default router