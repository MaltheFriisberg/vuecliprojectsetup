import Vue from 'vue'
import App from './App.vue'

window.Vue = Vue;
Vue.component('index', require('./App.vue').default);


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')