<template>
  <div>
    <nav>
      <router-link to="/">Home </router-link> |
      <span> 
        <router-link to="/dashboard">Dashboard </router-link> |
      </span>
      <span> 
        <router-link to="/card">Card </router-link> |
      </span>
      <span> 
        <router-link to="/registeruser">Register User </router-link> |
      </span>
      <span v-if="isLoggedIn"> 
        <button @click="handleSignOut"> Logout </button> 
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/login"> Login </router-link>
      </span>
      
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue' // used for conditional rendering
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth'
import 'firebase/storage';
import 'firebase/firestore';
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoggedIn = ref(true)

// runs after firebase is initialized
onAuthStateChanged(getAuth(),function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
})

const handleSignOut = () => {
  signOut(getAuth())
  router.push('/')
}
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
  }

  nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
    margin-bottom: 20px;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }

  nav button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
  }

  nav button:hover {
    background-color: #45a049;
  }

  .router-view-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
</style>
