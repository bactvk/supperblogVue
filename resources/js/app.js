
require('./bootstrap');

window.Vue = require('vue');

// support vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(storeData)
// vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import {routes} from './routes';

// V-form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Sweetalert2
import swal from 'sweetalert2'
window.swal = swal;
const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
})


window.Toast = Toast
//

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('adminmain',require('./components/admin/AdminMaster.vue').default);


const router = new VueRouter({
	routes,
	mode: 'history'
})

const app = new Vue({
    el: '#app',
    router,
    store
});
