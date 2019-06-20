import Vue from 'vue'
import format from "./build/common/format"
import verify from "./build/common/verify"
import index from './views/index.vue'

import './build/loading'
import './build/filter'


Vue.config.productionTip = false;

Vue.prototype.$format = format;
Vue.prototype.$verify = verify;


new Vue({
    // router,
    render(h) {
        return h(index);
    }
}).$mount('#app');


