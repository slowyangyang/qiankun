/**
 * @description 本地存储工具类
 * set: 设置本地存储
 * get: 获取本地存储
 * remove: 删除本地存储
 * clear: 清空本地存储
 */
class MyLocal {
  // set: (name: string, value: any) => void
  // get: (name: string) => any
  // remove: (name: string) => any
  // clear: () => any
  /**
   * @description 设置本地存储
   * @param {string} name 键名
   * @param {any} value 键值
   * @returns {void}
   */
  set = (name, value) => {
    if (!name || typeof value == 'undefined' || value == null) {
      throw Error('请传入正确的key和value')
    }
    localStorage.setItem(name, JSON.stringify(value))
  }
  /**
   * @description 获取本地存储
   * @param {string} name 键名
   * @returns {any}
   */
  get = name => {
    if (!name) {
      throw Error('请传入正确的key')
    }
    return localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : localStorage.getItem(name)
  }
  /**
   * @description 删除本地存储
   * @param {string} name 键名
   * @returns {void}
   * @example
   * remove('key1', 'key2')
   */
  remove = (...arg) => {
    if (!arg.length) {
      throw Error('请传入正确的key')
    }

    for (let key of arg) {
      localStorage.removeItem(key)
    }
  }
  /**
   * @description 清空本地存储
   * @returns {void}
   */
  clear = () => localStorage.clear()
}

export default new MyLocal()
