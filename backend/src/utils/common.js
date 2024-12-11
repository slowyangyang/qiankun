/**
 * 将16进制颜色转换为RGB或RGBA格式
 * @param {string} hexColor 16进制的颜色值，如 #FF0000 或 FF0000
 * @param {number} [a=1] 透明度，取值 0 - 1，默认 1，若 a 的值 大于 1 或者 小于 0 则将返回 RGB 格式的值
 */
export function hexToRgba(hexColor, a = 1) {
  // 移除前缀#符号
  hexColor = hexColor.replace(/^\s*#|\s*$/g, '')
  // 将三位十六进制转换为六位
  if (hexColor.length === 3) {
    hexColor = hexColor.replace(/(.)/g, '$1$1')
  }
  // 提取R、G、B各自的十六进制表示方式
  const r = parseInt(hexColor.substring(0, 2), 16)
  const g = parseInt(hexColor.substring(2, 2), 16)
  const b = parseInt(hexColor.substring(4, 2), 16)
  const rgb =
    a < 0 || a > 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`
  return rgb
}

/**
 * 防抖函数
 * @param { Function } func 函数
 * @param { Number } delay 防抖时间
 * @param { Boolean } immediate 是否立即执行
 * @param { Function } resultCallback
 */
export function debounce(func, delay = 500, immediate, resultCallback) {
  let timer = null
  let isInvoke = false
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)
      if (immediate && !isInvoke) {
        try {
          const result = func.apply(this, args)
          if (resultCallback) resultCallback(result)
          resolve(result)
        } catch (e) {
          reject(e)
        }
        isInvoke = true
      } else {
        timer = setTimeout(() => {
          try {
            const result = func.apply(this, args)
            if (resultCallback) resultCallback(result)
            resolve(result)
          } catch (e) {
            reject(e)
          }
          isInvoke = false
          timer = null
        }, delay)
      }
    })
  }
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    isInvoke = false
    timer = null
  }
  return _debounce
}

/**
 * 节流函数
 * @param { Function } func
 * @param { Boolean } interval
 * @param { Object } options
 * leading:初始 trailing:结尾
 */
export function throttle(
  func,
  interval,
  options = { leading: false, trailing: true },
) {
  let timer = null
  let lastTime = 0
  const { leading, trailing } = options
  const _throttle = function (...args) {
    const nowTime = Date.now()
    if (!lastTime && !leading) lastTime = nowTime
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      lastTime = nowTime
      func.apply(this, args)
    }
    if (trailing && !timer) {
      timer = setTimeout(() => {
        lastTime = !leading ? 0 : Date.now()
        timer = null
        func.apply(this, args)
      }, remainTime)
    }
  }
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    lastTime = 0
  }
  return _throttle
}

/**
 * 驼峰转换下划线
 * @param { String } name
 */
export function toLine(name) {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}

/**
 * file 转Base64 DataURL
 * @param {File} file
 * @returns
 */
export function fileToBase64Async(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      resolve(e.target.result)
    }
  })
}
