/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-06-19 20:48:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-06-19 20:51:43
 * @FilePath: \muid:\project\vue3-vite-templete\src\main.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { createApp } from 'vue'
import router from '@/router'

// 引入element-plus
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/index.scss'

import 'virtual:svg-icons-register' // svg 配置

// 引入qiankun actions
import qkActions from '@/qiankun/actions'

import '@/styles/index.scss'

import App from './App.vue'

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'
zhCn.el.pagination = Object.assign(zhCn.el.pagination)

let app
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(App)
  app.use(ElementPlus, {
    locale: zhCn,
  })

  app.use(router)
  // app.config.globalProperties.$echarts = echarts // 全局使用
  app.mount('#app')
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App, {
        parentStore: props.globalStore,
        eventBus: props.eventBus,
      })
      app.use(ElementPlus, {
        locale: zhCn,
      })
      // 子应用获取主应用的全局state
      qkActions.setAction(props)
      app.use(router)
      app.mount((props.container as HTMLElement).querySelector('#app'))
      // useUserStore().getUserInfo()
    },
    bootstrap() {
      console.log('vue app bootstrap')
    },
    update() {
      console.log('vue app update')
    },
    unmount() {
      console.log('vue app unmount')
      app?.unmount()
    },
  })
}
