import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

/* code from our Firebase console */
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

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App);
app.use(router);
app.mount('#app');