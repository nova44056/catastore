import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if(store.getters.loggedIn) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next ()
//     }
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     if(!store.getters.loggedIn) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next ()
//     }
//   } 
//   else {
//     next()
//   } 
// })