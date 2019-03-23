import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // // home在app.vue下面  子组件
      // 当path请求路径显示/的时候出现home页面
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/users',
        name: 'users',
        component: Users
      }]
    }, {
      // 当path请求路径显示/login的时候出现Login页面
      path: '/login',
      name: 'login',
      component: Login
    }, ]
})
