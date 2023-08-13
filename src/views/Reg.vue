<template>
  <center>
  <div class="container">
    <h1>Create an Account</h1>
    <div class="form-group">
      <label>Email</label>
      <input type="text" placeholder="Email" v-model="email" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" placeholder="Password" v-model="password" />
    </div>
    <div class="form-group">
      <button class="submit-btn" @click="register">register</button>
    </div>
  </div>
</center>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' // import router

const email = ref('')
const password = ref('')

const router = useRouter() // get a reference to our vue router
const register = () => {
  createUserWithEmailAndPassword(getAuth(),email.value, password.value) // need .value because ref()
  .then((data) => {
    console.log('Successfully registered!');
    router.push('/dashboard') // redirect to the feed
  })
  .catch(error => {
    console.log(error.code)
    alert(error.message);
  });
}
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 400px;
    margin: 10px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .form-group input,
  .submit-btn {
    width: calc(100% - 20px); /* Subtract 20px to account for padding */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
    margin: 0 10px; /* Add margin of 10px on left and right */
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }

  .submit-btn {
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
</style>  