<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required :class="{ 'error': emailError }">
      <span class="error-message" v-if="emailError">Please enter a valid email.</span>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required :class="{ 'error': passwordError }">
      <span class="error-message" v-if="passwordError">Please enter a password.</span>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

// Define your Pinia store module
const store = defineStore({
  id: 'myStore',
  actions: {
    async fetchUser() {
      try {
        // Perform necessary user data fetching logic here
        // For example, fetch user data from an API
        const response = await fetch('/api/user');
        const userData = await response.json();

        // Update user data in the store or take any other required actions
        this.user = userData;
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error if needed
      }
    },
  },
});

export default defineComponent({
  name: 'LoginComponent',
  setup() {
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const emailError = ref(false);
    const passwordError = ref(false);

    const login = async () => {
      // Reset error states
      emailError.value = false;
      passwordError.value = false;

      try {
        // Validate email and password
        if (!email.value || !isValidEmail(email.value)) {
          emailError.value = true;
          return;
        }

        if (!password.value) {
          passwordError.value = true;
          return;
        }

        // Sign in with email and password
        const authInstance = getAuth();
        await signInWithEmailAndPassword(authInstance, email.value, password.value);

        // Perform any necessary actions after successful sign-in (e.g., store user data, redirect)
        // Here, we assume the user data is stored in the Vuex store
        await store.fetchUser();

        // Redirect to the dashboard
        router.push('/dashboard');
      } catch (error) {
        console.error('Login error:', error.message);
        // Handle login error if needed
      }
    };

    const isValidEmail = (email) => {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailRegex.test(email);
    };

    return {
      email,
      password,
      emailError,
      passwordError,
      login
    };
  }
});


</script>

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