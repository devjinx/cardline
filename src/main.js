import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

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

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');