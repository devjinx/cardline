<template>
  <center>
    <div class="container">
      <form enctype="multipart/form-data" @submit="registerUser">
        <div class="form-group">
          <label for="fullname">Full Name:</label>
          <input type="text" v-model="fullName" id="fullname" name="fullname" required>
        </div>
        <div class="form-group">
          <label for="lastname">Last Name:</label>
          <input type="text" v-model="lastName" id="lastname" name="lastname" required>
        </div>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="numberphone">Phone Number:</label>
          <input type="tel" v-model="phoneNumber" id="numberphone" name="numberphone" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" name="password" required>
        </div>
        <div class="form-group">
          <label for="confirmpassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" id="confirmpassword" name="confirmpassword" required>
        </div>
        <div class="form-group">
          <label for="photo">Photo (JPEG or PNG, up to 2MB):</label>
          <input type="file" id="photo" name="photo" accept=".jpg, .jpeg, .png" required>
        </div>
        <div class="form-group">
          <input type="submit" value="Submit">
        </div>
      </form>
      <router-view></router-view>
    </div>
  </center>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      lastName: '',
      username: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User created:', user);
          // You can redirect the user to another page or perform other actions here
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error creating user:', errorCode, errorMessage);
        });
    }
  }
};
</script>


<style scoped>
/* Component-specific styles */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 10px;
}
.form-group label {
  display: block;
  font-weight: bold;
}
.form-group input {
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
.form-group input[type="file"] {
  padding: 0;
}
.form-group input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}
</style>
