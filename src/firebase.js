import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("registerform");
const formarea = document.getElementById("form-area");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
});