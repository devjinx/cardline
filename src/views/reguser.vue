<template>
    <div>
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <input v-model="phoneNumber" placeholder="Phone Number" />
      <input v-model="position" placeholder="Position" />
      <input type="file" @change="handleFileChange" />
      <button @click="registerProfile">Register</button>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import 'firebase/storage'; // Import 'firebase/storage' instead of 'firebase/firestore'
import { getStorage } from 'firebase/storage'; // Import 'getStorage' from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'; // Import getFirestore function

// Initialize Firebase (make sure to initialize it only once in your entire app)
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
initializeApp(firebaseConfig);
export default {
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      position: '',
      photo: null,
    }
  },
  methods: {
    handleFileChange(event) {
      this.photo = event.target.files[0];
    },
    async registerProfile() {
      if (this.photo && this.photo.type === 'image/png' && this.photo.size <= 1024 * 1024) {
        const db = getFirestore();
        const storage = getStorage();

        const photoRef = storage.child(`profile_photos/${this.photo.name}`);
        await photoRef.put(this.photo);
        const photoUrl = await photoRef.getDownloadURL();

        await db.collection('profiles').add({
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
          position: this.position,
          photoUrl: photoUrl,
        });

        this.name = '';
        this.email = '';
        this.phoneNumber = '';
        this.position = '';
        this.photo = null;

        alert('Profile registered successfully!');
      } else {
        alert('Please select a PNG image file of size up to 1MB.');
      }
    },
  },
};
</script>