// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl_1rB3G5UJyZPCw9V4Zmv8Ob8q1EPUZM",
    authDomain: "testappcard-27b80.firebaseapp.com",
    projectId: "testappcard-27b80",
    storageBucket: "testappcard-27b80.appspot.com",
    messagingSenderId: "516526069040",
    appId: "1:516526069040:web:b7faade2ebf1459efca4f5",
    measurementId: "G-3Y18BQ2HRS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };