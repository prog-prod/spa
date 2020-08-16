require('./bootstrap');
require('particles.js')

window.path = require('path')

import Vue from 'vue';
import App from './views/App'
import router from './router/index';

// ** VUEX STORE **
import store from './store.js';

import trans from './_lang.js';
window.trans = trans;

import glob from './mixins/global'
import axiosIsLoading from './mixins/axios-is-loading'

// ** vue-axios **
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;

Vue.mixin(glob);
Vue.mixin(axiosIsLoading);
Vue.use(VueAxios, axios);

particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const app = new Vue({
    store,
    components: { App },
    router,
}).$mount('#app');

