// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import {Upload} from 'element-ui'
Vue.use(Upload)
import {Loading} from 'element-ui'

Vue.use(Loading)
Vue.config.productionTip = false
require('es6-promise').polyfill();

Vue.prototype.hostUrl = (function () {
  var is_product = document.domain == 'm.gxw520.com';
  var hostUrl = is_product ? 'https://m.gxw520.com/' : 'http://192.168.1.10/gxw_mobile3/';
  return hostUrl
})()
Vue.prototype.gxwloginUrl = (function () {
  var is_product = document.domain == 'm.gxw520.com';
  var gxwloginUrl = is_product ? 'https://www.gxw520.com/' : 'http://192.168.1.10/gxw520/';
  return gxwloginUrl
})()

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
Vue.filter('int_f', function (value) {
  return parseInt(value)
})

Vue.filter('time_f', function (value) {
  value = value.replace(/\-/g, "/");
  var oldTime = new Date(value);
  var curTime = oldTime.getFullYear() + "." + parseInt(oldTime.getMonth() + 1) + "." + oldTime.getDate()
  return curTime
})
