import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'



import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ApiService from '@/common/service/api'

import '@/assets/stylus/reset.css'


ApiService.init()

Vue.config.productionTip = false



Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
store,
router,
render: h => h(App),
}).$mount('#app')
