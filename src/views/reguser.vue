<template>
  <div>
    <h2>Data Input Form</h2>
    <form @submit.prevent="submitForm">
      <label>Username:</label>
      <input v-model="userData.username" required />

      <label>Name:</label>
      <input v-model="userData.name" required />

      <label>Phone Number:</label>
      <input v-model="userData.phoneNumber" required />

      <label>Position:</label>
      <input v-model="userData.position" required />

      <label>Occupation:</label>
      <input v-model="userData.occupation" required />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// Initialize Firebase
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
const db = getFirestore(app); // Initialize Firestore

export default {
  data() {
    return {
      userData: {
        username: '',
        name: '',
        phoneNumber: '',
        position: '',
        occupation: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const app = initializeApp(firebaseConfig); // Initialize Firebase
        const db = getFirestore(app);
        const userRef = collection(db, 'users');
        await addDoc(userRef, this.userData);
        console.log('Data added to Firestore');
        // Clear form after submission
        this.userData = {
          username: '',
          name: '',
          phoneNumber: '',
          position: '',
          occupation: '',
        };
      } catch (error) {
        console.error('Error adding data:', error);
      }
    },
  },
};

</script>