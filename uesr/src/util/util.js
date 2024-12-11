import {getCookie} from './cookie.js'
// import * as api from '@/service/api'
import {apiGet, apiPut, apiDelete, apiPost} from "@/api/request.js";
const OSS = require('ali-oss')
// const isDev = process.env.NODE_ENV;

const processWsUrl = process.env.VUE_APP_WS_API
const processTitle = process.env.VUE_APP_TITLE
const processFileUrl = process.env.VUE_APP_FILE_URL

let bucketOss = ''
if(processTitle == 'production' || processTitle == 'testing'){
  bucketOss = 'dawa-cloud'
} else {
  bucketOss = 'dawa-cloud'
}

/**
 * WebSocket链接地址
*/
export const wsBaseUrl = processWsUrl;

/**
 * 图片domain
*/
export const ossFileDomain = 'https://dawa-cloud.oss-cn-beijing.aliyuncs.com'

/**
 * 格式化时间-年月日
 */
export const formatYearMonDayStr = (type) => {
  let now = new Date();
  var year = now.getFullYear(),
  month = now.getMonth() + 1,
  day = now.getDate(),
  hour = now.getHours(),
  min = now.getMinutes(),
  sec = now.getSeconds(),
  formatTime = '';

  month < 10 ? month = '0' + month : month;
  day < 10 ? day = '0' + day : day;
  hour < 10 ? hour = '0' + hour : hour;
  min < 10 ? min = '0' + min : min;
  sec < 10 ? sec = '0' + sec : sec;
  if(type == 1){//type=1 年月日
    formatTime = year + month.toString() + day.toString()
  } else if(type == 2){
    formatTime =  hour.toString() + min.toString() + sec.toString();
  }
  return formatTime
}

/**
 * 格式化上传文件名称：// 文件名：/用户ID/时间戳/文件名  //给后台传的文件名：/oss/+拼接文件名
 */
export const formatUpFileName = (name, data) => {
  let formatName = '';
  let paramName = name
  if(paramName){
    let getUserId = getCookie('USER_ID') || '';
    if(getUserId){
      let userID = getUserId;
      let timeStamp1 = formatYearMonDayStr(1);
      let timeStamp2 = formatYearMonDayStr(2);
      let env = ''
      paramName = paramName.replace(/\[|\]|\(|\)|#|&/g, '1')
      if(processTitle == 'production'){
        env = 'project'
      } else if(processTitle == 'testing'){//43 需要加端口号
        env = 'dawa-test'
      } else if(processTitle == 'alpha'){//150 需要加端口号
        env = 'dawa-dev'
      } else {// 开发
        env = 'dawa-dev'
      }
      formatName = `${env}/${timeStamp1}/${userID}/${timeStamp2}/${paramName}`;
    }
  }
  return formatName
}

// 阿里云上传
export const client = new OSS({
    region: 'https://oss-cn-beijing.aliyuncs.com',//同endpoint
    endpoint: 'https://oss-cn-beijing.aliyuncs.com',
    accessKeyId: 'LTAI5tBY7vCg6WU2ueA6jso3',
    accessKeySecret: 'fxRtRC53ry0rN1vcisyAPQqzufr01B',
    bucket: bucketOss//OSS空间名称   oss2 线上  dawa-oss 测试
})

//put上传
export const uploadPut = (name, file) => {
  return new Promise((resolve, reject) => {
    // let fileName = name;
    let fileName = ''
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth()+1;
    let dd = new Date().getDate();
    mm = mm<10 ? '0' + mm : mm
    dd = dd<10 ? '0' + dd : dd
    fileName = 'd59de7b24a9f11eca01000163e144cbe/' + yy + mm +dd + '/' +
      Date.parse(new Date()) + Math.floor(Math.random()*1000) + '/' +
      name
    // let date = new Date(Date.parse(new Date()))
    // let year = date.getFullYear();
    // let month = (date.getMonth()+1  < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    // let day = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    // let timeDate = year+'/'+month+'/'+day+'/';
    // let timeStamp = timeDate + Date.parse(new Date()) + Math.floor(Math.random()*1000);
    client.put(fileName, file).then(res => {
      let resFileName = res.name;
      let formatResFileName = `${ossFileDomain}/${resFileName}`;
       return resolve(formatResFileName)
     }).catch(error => {
       reject(error)
     })
    // client.put(fileName, file).then(res => {
    //  let resFileName = res.name;
    //  let formatResFileName2 = `${ossFileDomain}/${resFileName}`;
    //   return resolve(formatResFileName2)
    // }).catch(error => {
    //   console.log("000000000000000000000000000");
    //   reject(error)
    // })
  })
}

//计算项目两者之间的时间差异 --- 相差天数 --- 根据时间戳计算
export function timeDiff(start_time, stop_time){
  // let oldTime = Date.parse(start_time)
  // let newTime = Date.parse(stop_time)
  let timeDiff = stop_time-start_time
  return Math.floor(timeDiff / 1000 / 60 / 60 / 24)
}

//将时间戳字符串改为 '2021-03-07'
export function timeShow(time){
  let date = new Date(time)
  let year = date.getFullYear()
  let month = (date.getMonth()+1 < 10) ? '0' + (date.getMonth()+1).toString() : (date.getMonth()+1)
  let day = (date.getDate() < 10) ? '0' + date.getDate().toString() : date.getDate()
  // let oldTime = Date.parse(start_time)
  // let newTime = Date.parse(stop_time)
  // let timeDiff = stop_time-start_time
  return year + '-' + month + '-' + day
}

/**
 * 获取文件服务访问路径
 * @param avatar
 * @param subStr
 * @returns {*}
 */
export function getFileAccessHttpUrl(avatar, subStr) {
  if(!subStr) subStr = 'http'
  try {
    if(avatar && avatar.startsWith(subStr)){
      return avatar;
    }else{
      if(avatar &&　avatar.length>0 && avatar.indexOf('[')==-1){
        return avatar
        // return window._CONFIG['staticDomainURL'] + "/" + avatar;
      }
    }
  }catch(err){
    return;
  }
}

export function validateDuplicateValue(tableName, fieldName, fieldVal, dataId, callback) {
  if (fieldVal) {
    let params = { tableName, fieldName, fieldVal, dataId }
    let url = 'sys/duplicate/check'
    apiGet(url, params).then(res => {
      res['success'] ? callback() : callback(res['message'])
    }).catch(err => {
      callback(err.message || err)
    })
  } else {
    callback()
  }
}

/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
export function filterObj(obj) {
  if (!(typeof obj == 'object')) {
    return;
  }

  for ( let key in obj) {
    if (obj.hasOwnProperty(key)
      && (obj[key] == null || obj[key] == undefined || obj[key] === '')) {
      delete obj[key];
    }
  }
  return obj;
}

// /**
//  * 触发 window.resize
//  */
/*取消开源版在线开发的功能*/
export function triggerWindowResizeEvent() {
  let event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function getClass(ele) {
  let data = {}
  if (ele.data) {
    data = ele.data
  } else if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data
  }
  const tempCls = data.class || {}
  const staticClass = data.staticClass
  let cls = {}
  staticClass &&
  staticClass.split(' ').forEach(c => {
    cls[c.trim()] = true
  })
  if (typeof tempCls === 'string') {
    tempCls.split(' ').forEach(c => {
      cls[c.trim()] = true
    })
  } else if (Array.isArray(tempCls)) {
    classNames(tempCls)
      .split(' ')
      .forEach(c => {
        cls[c.trim()] = true
      })
  } else {
    cls = { ...cls, ...tempCls }
  }
  return cls
}
const camelizeRE = /-(\w)/g

function camelize(str) {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

function objectCamelize(obj) {
  let res = {}
  Object.keys(obj).forEach(k => (res[camelize(k)] = obj[k]))
  return res
}

export function getStyle(ele, camel) {

  getClass(ele)

  let data = {}
  if (ele.data) {
    data = ele.data
  } else if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data
  }

  // update-begin-author:sunjianlei date:20200303 for: style 和 staticStyle 可以共存
  let style = data.style || {}
  let staticStyle = data.staticStyle
  staticStyle = staticStyle ? objectCamelize(data.staticStyle) : {}
  // update-end-author:sunjianlei date:20200303 for: style 和 staticStyle 可以共存

  if (typeof style === 'string') {
    style = parseStyleText(style, camel)
  } else if (camel && style) {
    // 驼峰化
    style = objectCamelize(style)
  }
  return { ...staticStyle, ...style }
}

export function disabledAuthFilter(code,formData) {
  if(nodeDisabledAuth(code,formData)){
    return true;
  }else{
    return globalDisabledAuth(code);
  }
}

export function humpOrLine(name, type) { // 驼峰式转下划线: toLine 下划线转驼峰式: toHump
  if (type === 'toLine') {
    return name.replace(/([A-Z])/g, '_$1').toLowerCase();
  } else if (type === 'toHump') {
    return name.replace(/_(\w)/g, function(all, letter){
      return letter.toUpperCase();
    });
  }
}

/**
 * 深度克隆对象、数组
 * @param obj 被克隆的对象
 * @return 克隆后的对象
 */
export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj))
}

//深拷贝
export function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

/**
 * 如果值不存在就 push 进数组，反之不处理
 * @param array 要操作的数据
 * @param value 要添加的值
 * @param key 可空，如果比较的是对象，可能存在地址不一样但值实际上是一样的情况，可以传此字段判断对象中唯一的字段，例如 id。不传则直接比较实际值
 * @returns {boolean} 成功 push 返回 true，不处理返回 false
 */
export function pushIfNotExist(array, value, key) {
  for (let item of array) {
    if (key && (item[key] === value[key])) {
      return false
    } else if (item === value) {
      return false
    }
  }
  array.push(value)
  return true
}

//时间格式化

export function dateFormat(dateData) {
  let date = new Date(dateData)
  let y = date.getFullYear()
  let M = date.getMonth() + 1
  M = M < 10 ? ('0' + M) : M
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  const time = y + '-' + m + '-' + d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let m = date.getMinutes()
  m = m < 10 ? ('0' + m) : m
  let s = date.getSeconds()
  s = s < 10 ? ('0' + s) : s
  return  y+'-'+M+'-'+'d' + ' ' + h +':'+ m+':'+s
}

export function fileType (path) {
  const imgList = ['.jpg','.jpeg','.png','.gif','.bmp','.tiff','.png'];
  const videoList = ['.avi','.mp4','.mov','.m4v','.wmv','.flv','.f4v'];
  try {
    if (path.indexOf('.') > -1){
      let list = path.split('.')
      let type = '.' + list[list.length - 1]
      console.log(1111,list,type)
      if (imgList.indexOf(type) > -1){
        return 'image'
      }else if (videoList.indexOf(type) > -1){
        return 'video'
      }
    }else {
      return 'catalog'
    }
  }catch (e) {
    console.log(e)
    return 'none'
  }


}
