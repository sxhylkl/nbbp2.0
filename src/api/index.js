import Vue from 'vue'
import { AjaxPlugin } from 'vux'
require('es6-promise').polyfill()
Vue.use(AjaxPlugin)
Vue.http.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://192.168.5.37/xinNiuBa/public'
Vue.http.interceptors.request.use(function (config) {
  /* for (var i in config.params) {
    if (typeof config.params[i] === 'string' && config.params[i].indexOf('?') !== -1) {
      config.params[i] = config.params[i].substring(0, config.params[i].indexOf('?'))
    }
  } */
  // Do something before request is sent
  /* if (localStorage.getItem('token_guoguo')) {
    config.headers['Authorization'] = localStorage.getItem('token_guoguo')
  } */
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

/**
 * 获取会员信息
 */
export const getMemberInfo = () => {
  return Vue.http.post('/weixin/members/getMember', {}).then((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    return Promise.reject(error.response.data)
  })
}

/**
 * 更新会员信息
 * @param {*} data
 */
export const saveMemberInfo = (data) => {
  return Vue.http.post('/weixin/members/saveMcMsg', data).then((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    return Promise.reject(error.response.data)
  })
}

export const GetAlbums = (data) => {
  return Vue.http.get('/albums', {params: data}).then((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    return Promise.reject(error.response.data)
  })
}
