// main.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Card from './views/Card.vue';
import Register from './views/Reg.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/card', component: Card },
    { path: '/register', component: Register },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    router,
}).$mount('#app');