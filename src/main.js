// 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入element-ui组件库
import ElementUI from 'element-ui'
// 样式文件
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
// 引入封装好的axios插件
import httpServer from './http';

// 使用组件库
Vue.use(ElementUI)
// 使用axios插件
Vue.use(httpServer)

// 脚手架自动生成的代码
Vue.config.productionTip = false

// 脚手架自动生成的代码
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
