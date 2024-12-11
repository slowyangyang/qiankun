import {
  start,
  registerMicroApps,
  addGlobalUncaughtErrorHandler
} from 'qiankun'
import subApps from './config.js'
import { ElNotification } from 'element-plus'
// import { globalErrorHandler } from './error-handler'

function startQiankun(options) {
  // 1. 注册子应用
  registerMicroApps(subApps, {
    beforeLoad: [async (app) => console.log('before load', app.name)],
    beforeMount: [async (app) => console.log('before mount', app.name)],
    afterMount: [async (app) => console.log('after mount', app.name)]
  })

  // 加载错误捕获
  // addGlobalUncaughtErrorHandler(globalErrorHandler)
  // 出错时显示的内容
  addGlobalUncaughtErrorHandler((event) => {
    const { message } = event
    if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
      ElNotification({
        title: 'Error',
        message: '微应用加载失败，请检查应用是否可运行',
        type: 'error',
        duration: 2 * 1000,
        offset: 50
      })
    }
  })

  // 2. 启动微服务
  start(options)
}

export default startQiankun
