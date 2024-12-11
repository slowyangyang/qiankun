import dayjs from 'dayjs'
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
/**
 * 格式化时间戳
 * @param {number} time 时间戳（ms）
 * @param {string} format 时间格式
 * @returns {string} 格式化后的时间字符串
 */
export function formatStamp(time, format = DATE_TIME_FORMAT) {
  if (!time) {
    return
  }
  return dayjs(time).format(format)
}

//时间段（ms）
export function calcDur(time) {
  let duration = time
  if (!duration) {
    return '--'
  }
  if (duration < 0) {
    duration = Number(duration.toString().substring(1))
  }
  let day = Math.floor(duration / 60 / 60 / 24)
  let hour = Math.floor((duration / 60 / 60) % 24)
  let miun = Math.floor((duration / 60) % 60)
  let sec = duration % 60
  let str = ''
  if (day) {
    str += day + '天'
  }
  if (hour) {
    str += hour + '小时'
  }
  if (miun) {
    str += miun + '分'
  }
  if (sec) {
    str += sec + '秒'
  }
  return time > 0 ? str : '-' + str
}
