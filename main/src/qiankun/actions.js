import { initGlobalState } from 'qiankun'
import state from '@/qiankun/state.js'

/**
 * @description 初始化全局状态池
 *
 */

function initAction() {
  let initState = {
    username: 'zhangsan',
    info: {
      age: 20,
      address: '北京'
    }
  }
  if (localStorage.getItem('globalStore')) {
    initState = JSON.parse(localStorage.getItem('globalStore'))
  }
  // 初始化全局状态机
  let action = initGlobalState(initState)

  action.getGlobalState = (name) => (name ? state[name] : state)

  action.onGlobalStateChange((state) => {
    console.log('主应用有更新', state)
    localStorage.setItem('globalStore', JSON.stringify(state))
  })
  return action
}

export default initAction
