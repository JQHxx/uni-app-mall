import Vue from 'vue'
import App from './App'
import https from './utils/https.js'
import status from './components/status.vue';
import header from './pages/tabBar/home/pageHeader.vue'

Vue.config.productionTip = false
Vue.prototype.request = https

Vue.component('page-status', status)
Vue.component('page-header', header)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
