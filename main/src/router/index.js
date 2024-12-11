import { createRouter, createWebHistory } from 'vue-router'
import contantRoutes from './config.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: contantRoutes
})

export default router
