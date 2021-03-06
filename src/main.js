import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs, List } from 'vant'
Vue.use(Tab).use(Tabs).use(List)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
