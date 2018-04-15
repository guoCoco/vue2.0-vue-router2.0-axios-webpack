// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './http/index.js'
import utils from './utils/index.js'
import store from './store'
/* 按需引入部分组件 */
import {Button} from 'mint-ui'

// 引入fastclick/等js文件, 处理 ios 点击300毫秒的问题
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.prototype.$http = http
Vue.prototype.$utils = utils

/* 注册全局组件 */
Vue.component(Button.name, Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
