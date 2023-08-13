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
const firebaseConfig = {
    apiKey: "AIzaSyCl_1rB3G5UJyZPCw9V4Zmv8Ob8q1EPUZM",
    authDomain: "testappcard-27b80.firebaseapp.com",
    databaseURL: "https://testappcard-27b80-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testappcard-27b80",
    storageBucket: "testappcard-27b80.appspot.com",
    messagingSenderId: "516526069040",
    appId: "1:516526069040:web:b7faade2ebf1459efca4f5",
    measurementId: "G-3Y18BQ2HRS"
};
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