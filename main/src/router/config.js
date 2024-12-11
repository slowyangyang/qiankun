import { mapSubAppToName } from '@/qiankun/config.js'

let whiteList = mapSubAppToName()
console.log(whiteList)

export default [
  {
    path: '/',
    component: () => import('@/layout/MainBaseLayout.vue'),
    name: 'layout',
    redirect: '/micro-user',
    children: [
      {
        path: `/:micro(${whiteList.join('|')}):endPath(.*)`,
        name: '子应用',
        component: () => import('@/views/micro-app/index.vue'),
        meta: {
          title: '子应用',
          icon: 'Setting',
          subapp: true
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      title: '404',
      hidden: true
    }
  }
]
