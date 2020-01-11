require('./bootstrap');
// import vuex from 'vuex';
import VueRouter from "vue-router";
import Vue from 'vue';
import store from './store/index';
import './store/subscriber';

import App from "./components/App";
import HomeComponent from "./components/HomeComponent";
import DashboardComponent from "./components/DashboardComponent";

Vue.use(VueRouter);

// Remove console log note
Vue.config.productionTip = false;

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/dashboard',
        component: DashboardComponent,
        meta: {
            requireAuth: true
        }
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(req => req.meta.requireAuth)) {
        if (await store.state.auth.token) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    const app = new Vue({
        router,
        store,
        el: '#app',
        render: h => h(App)
    });
});
