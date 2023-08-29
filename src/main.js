import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBgbQByL8hN-JCnfs8x6tUBCoNggMAiRzE",
    authDomain: "cardline-e0861.firebaseapp.com",
    databaseURL: "https://cardline-e0861-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cardline-e0861",
    storageBucket: "cardline-e0861.appspot.com",
    messagingSenderId: "35841504833",
    appId: "1:35841504833:web:222d2ed94fda0c7948b8c0",
    measurementId: "G-TGVZ5RSH84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const vueApp = createApp(App);
vueApp.use(router);
vueApp.mount('#app');