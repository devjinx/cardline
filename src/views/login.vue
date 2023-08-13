<template>
  <center>
    <div class="container">
      <h1>Login to Your Account</h1>
      <div class="form-group">
        <label>Email</label>
        <input type="text" placeholder="Email" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <p v-if="errMsg" class="error-message">{{ errMsg }}</p>
      <div class="form-group">
        <button class="submit-btn" @click="signIn">login</button>
      </div>
    </div>
  </center>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' // import router

const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE

const router = useRouter() // get a reference to our vue router

const signIn = () => { // we also renamed this method 
signInWithEmailAndPassword(getAuth(),email.value, password.value) // THIS LINE CHANGED
  .then((data) => {
    console.log('Successfully logged in!');
    router.push('/dashboard') // redirect to the feed
  })
  .catch(error => {
    switch (error.code) {
      case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
      case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break
      case 'auth/wrong-password':
          errMsg.value = 'Incorrect password'
          break  
      default:
          errMsg.value = 'Email or password was incorrect'
          break
    }
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
