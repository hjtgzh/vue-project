import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
// import axios from 'axios';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';

Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
