<template>
  <div class="dashboard-container">
    <div v-if="user">
      <h2>Welcome, {{ user.displayName }}</h2>
      <div>
        You are logged in!
      </div>
      <button @click="signOut">Log Out</button>
    </div>
    <div v-else>
      <h2>You are not logged in!</h2>
    </div>
  </div>
</template>

<script>
//problem
import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { auth, db } from '../firebaseConfig';

export default {
  name: 'DashboardComponent',
  setup() {
    const store = defineStore();
    const router = useRouter();

    // Retrieve user data from store
    const user = computed(() => store.state.user);

    const signOut = async () => {
      try {
        await auth.signOut();
        // Perform any necessary actions after signing out (e.g., redirect)
        router.push('/');
      } catch (error) {
        console.error('Sign out error:', error.message);
      }
    };

    return {
      user,
      signOut
    };
  }
};
</script>

<style>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.dashboard-container h2 {
  margin-bottom: 20px;
}

.dashboard-container button {
  padding: 10px;
  border-radius: 3px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}

.dashboard-container button:hover {
  background-color: #45a049;
}
</style>