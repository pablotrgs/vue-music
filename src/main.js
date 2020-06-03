import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes'

import eventBus from './plugins/event-bus'

Vue.use(VueRouter)
Vue.use(eventBus)

const router = new VueRouter ({ 
  routes,
  mode: 'history' 
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
