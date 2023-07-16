<template>
  <div class="login-container">
    <h2>Registration</h2>
    <form @submit.prevent="register">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.login-container h2 {
  margin-bottom: 20px;
}

.login-container form {
  width: 300px;
}

.login-container label,
.login-container input,
.login-container button {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}

.login-container .error {
  border: 1px solid red;
}

.login-container .error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.login-container button {
  padding: 10px;
  border-radius: 3px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}

.login-container button:hover {
  background-color: #45a049;
}
</style>

<script>
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Registration successful
          alert('Registration successful!');
          // You can redirect to another page or perform additional actions here
        })
        .catch((error) => {
          // Registration failed
          console.error(error);
          alert('Registration failed. Please try again.');
        });
    }
  }
};
</script>
