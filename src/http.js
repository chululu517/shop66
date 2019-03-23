// 封装axios模块
// 引入axios element-ui 第三方插件
import axios from 'axios'
import { Massage } from 'element-ui'

const httpServer = {}
httpServer.install = function (Vue) {
  // 统一设置基准地址
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

  //请求拦截器
  axios.interceptors.request.use((config) => {
    // console.log(config)
    // 如果请求的页面不是登录页
    if (config.url !== 'login') {
      // 所以我们就去localStorage里找token
      const token = localStorage.getItem('token')
      // 然后 有了token就写入  自己定义的Authorization里
      config.headers['Authorization'] = token
    }
    // 返回config  两个
    return config;
  }, function (error) {
    return Promise.reject(error)
  })

  // 响应拦截器  凡是服务器发来的响应都需要通过响应拦截器  看响应发回来的数据进行处理判断
  axios.interceptors.response.use(function (response) {
    // console.log(11111)
    // 解构赋值
    const { meta: { status, msg } } = response.data
    // 如果状态码不等于200或者201 就提示错误信息
    if (status !== 200 && status !== 201) {
      Massage.error(msg)
      // 跳转登录页面
      router.replace('/login')
    }
    return response
  }, function (error) {
    return Promise.reject(error)
  })
  Vue.prototype.$http = axios;
}
// 导出
export default httpServer
