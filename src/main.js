import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
Vue.prototype._back = () => {
  uni.navigateBack()
}
const app = new Vue({
  ...App
})
app.$mount()
