import { createRouter, createWebHistory } from 'vue-router';
import Card from '../views/Card.vue';
import Register from '../views/Reg.vue';
import Login from '../views/login.vue';
import Dashboard from '../views/dashboard.vue';
import Reguser from '../views/reguser.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const routes = [
    { path: '/card', name: 'Card', component: Card },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/registeruser', name: 'Reguser', component: Reguser },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router