import Vue from 'vue'
import Router from 'vue-router'

const image = () => import(    /* webpackChunkName: "home" */    './views/image.vue');


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: image
        },
    ]
})
