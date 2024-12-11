import { createRouter, createWebHistory } from 'vue-router'

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const base = qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro-backend' : '/'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
    name: 'about',
  },
]
const router = createRouter({
  history: createWebHistory(base),
  routes,
})

export default router
