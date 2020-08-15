
require('./bootstrap');
require('particles.js')

window.path = require('path')
import Vue from 'vue';
import App from './views/App'
import router from './router/index';
import glob from './mixins/global'

Vue.config.productionTip = false;

Vue.mixin(glob);

particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const app = new Vue({
    components: { App },
    router,
}).$mount('#app');

