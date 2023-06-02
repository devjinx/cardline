import { createRouter, createWebHistory } from 'vue-router';
import Card from '../views/Card.vue';
import Register from '../views/Reg.vue';

const routes = [
    { path: '/card', name: 'Card', component: Card },
    { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router