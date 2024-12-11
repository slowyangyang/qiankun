import axios from 'axios'
import Local from '@/utils/localStorage'
import { ElMessage } from 'element-plus'

//创建axios实例
const instance = axios.create({
  baseURL: Local.get('IS_RUN_MAIN_APP') ? '/api' : '/api',
  timeout: 5000,
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = Local.get('TOKEN') || ''
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  },
)

function $request(options) {
  return new Promise((resolve, reject) => {
    instance
      .request(options)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  get: (options = {}) => $request({ ...options, method: 'get' }),
  post: (options = {}) => $request({ ...options, method: 'post' }),
}
