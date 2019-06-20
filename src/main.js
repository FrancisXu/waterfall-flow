import Vue from 'vue'
import App from './App.vue'
import format from "./build/common/format"
import verify from "./build/common/verify"
import utils from "./build/common/utils"
import router from './router'


Vue.prototype.$format = format;
Vue.prototype.$verify = verify;
Vue.prototype.$utils = utils;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
