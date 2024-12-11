import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// qiankun 状态管理
import initQkState from '@/qiankun/actions.js'
import '@/assets/css/reset.css'
// 这是 NProgress 的默认样式
import 'nprogress/nprogress.css'
// styles
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/index.scss'
import '@/styles/index.scss'
// 注册qiankun全局状态管理
initQkState()

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})
// 全局注册
// 全部element-plus图标注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)

app.mount('#app')
