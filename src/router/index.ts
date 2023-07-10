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
      component: () => import('@/pages/hospital/index.vue'),
      children: [
        {
          name: 'detail',
          path: '/detail',
          component: () => import('@/pages/hospital/detail/index.vue')
        },
        {
          name: 'close',
          path: '/close',
          component: () => import('@/pages/hospital/close/index.vue')
        },
        {
          name: 'notice',
          path: '/notice',
          component: () => import('@/pages/hospital/notice/index.vue')
        },
        {
          name: 'register',
          path: '/register',
          component: () => import('@/pages/hospital/register/index.vue')
        },
        {
          name: 'search',
          path: '/search',
          component: () => import('@/pages/hospital/search/index.vue')
        },
      ]
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