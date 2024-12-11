/*
 * @Author: macaihong
 * @Date: 2019-07-25 20:02:56
 * @Last Modified by: macaihong
 * @Last Modified time: 2019-07-25 20:18:51
 */

import Cookie from 'js-cookie';
var millisecond = new Date().getTime();
var expiresTime = new Date(millisecond + 60 * 1000 * 60*24*365);
/**
* function:        		设置cookie
* @param name			name为cookie名称
* @param value			value为cookie值
* @param time			time为cookie过期时间
* @returns{string}   	cookie
*/
export const setCookie = (name, value, time) => {
    return Cookie.set(name, value, { expires:expiresTime, });
};


/**
* function:        		获取cookie
* @param name			name为cookie名称
* @returns{string}   	cookie
*/
export const getCookie = (name) => {
    return Cookie.get(name);
};

/**
* function:        		清除cookie
* @param name			name为cookie名称
* @returns{string}   	cookie
*/
export const removeCookie = (name) => {
    return Cookie.remove(name);
};

