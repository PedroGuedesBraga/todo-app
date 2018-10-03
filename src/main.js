import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Login from './components/login.vue'
import TodoView from './components/TodoView.vue'



import Router from 'vue-router'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Router);

const routes = [
  {path: '/', component: Login},
  {path: '/todo-view', component: TodoView}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
