import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
Vue.prototype._url = "http://39.106.208.234/pic/img_/"
const app = new Vue({
  ...App
})
app.$mount()
