import eventBus from '@/utils/eventBus'
import actions from './actions'
const subApps = [
  {
    name: 'micro-user', // 子应用的名称: 用户系统
    entry: import.meta.env.VITE_SUB_APP_USER_URL, // 默认会加载这个路径下的html，解析里面的js
    activeRule: '/micro-user', // 匹配的路由
    container: '#subApp', // 加载的容器
    props: {
      eventBus,
      apppName: '用户系统'
    }
  },

  {
    name: 'micro-backend', // 后台管理系统
    entry: import.meta.env.VITE_SUB_APP_BACKEND_URL,
    activeRule: '/micro-backend',
    container: '#subApp',
    props: {
      name: 'zhangsan',
      eventBus,
      apppName: '后台管理系统'
    }
  }
]
export function mapSubAppToPath() {
  return subApps.map((item) => item.activeRule)
}

export function mapSubAppToName() {
  return subApps.map((item) => item.name)
}

export function mapSubAppToObj() {
  return subApps.map((item) => ({
    label: item.props.apppName,
    path: item.activeRule
  }))
}

export function autoRegisterMicroApp() {
  return subApps.filter((item) => !item.props.handleLoad)
}

// 手动注册微应用
export function manualRegisterMicroApp(appName) {
  return subApps.find((item) => item.name === appName)
}
export default subApps
