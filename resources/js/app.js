
require('./bootstrap');

import Vue from 'vue';
import App from './views/App'
import router from './router/index';
import glob from './mixins/global'

Vue.config.productionTip = false;

Vue.mixin(glob);

const app = new Vue({
    components: { App },
    router,
}).$mount('#app');
