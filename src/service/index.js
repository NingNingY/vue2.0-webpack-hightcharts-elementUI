import Vue from 'vue'
// import axios from 'axios'
// import message from 'element-ui/lib/message'
import { API_ROOT } from '../config.js'

const service = {

}

// const service = axios.create({
//   baseURL: `${API_ROOT}/auth`,
//   headers: { 'Content-Type': 'application/json' }
// })

// // 拦截器
// service.interceptors.request.use(config => {
//   config.headers = config.headers || {}
// 	const token = localStorage.getItem('token')
//   if (token) config.headers.Authorization = `Bearer ${token}`
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// service.interceptors.response.use(response => {
//   if (response.data.message != '回测状态获取成功') {
//     message.success(response.data.message || '数据请求成功')
//   }
//   return response
// }, error => {
//   console.log(error)
// 	const response = error.response
// 	const status = response.status
// 	if (Object.is(status, 403)) {
// 		message.error('权限不足，请重新登录！')
//     localStorage.removeItem('uid')
//     localStorage.removeItem('user')
//     localStorage.removeItem('token')
//     if (!Object.is(window.location.pathname, '/quantization/auth/login')) {
//       window.location.pathname = '/quantization/auth/login'
//     }
//   } else if (Object.is(status, 500)) {
//     message.error('网络错误，请稍后再试！')
//   } else if (Object.is(status, 404)) {
//     message.error(response.data.message || '未找到对应数据！')
//   } else {
//     message.error(response.data.message || '未知错误！')
//   }
//   return Promise.reject(error)
// })

// Vue.prototype.$http = service
export default service
