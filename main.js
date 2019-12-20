import Vue from 'vue'
import App from './App'
import https from './utils/https.js'

Vue.config.productionTip = false
Vue.prototype.request = https

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
