
require('./bootstrap');

window.Vue = require('vue');

// vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import {routes} from './routes';

import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('adminmain',require('./components/admin/AdminMaster.vue').default);


const router = new VueRouter({
	routes,
	mode: 'history'
})

const app = new Vue({
    el: '#app',
    router
});
