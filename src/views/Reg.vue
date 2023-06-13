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
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

export default {
  data() {
    return {
      // Existing data properties
    };
  },
  methods: {
    registerUser(event) {
      event.preventDefault();

      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      // Get the photo file from the file input
      const photoFile = this.$refs.photoInput.files[0];

      // Create a reference to Firebase Storage
      const storageRef = firebase.storage().ref();

      // Generate a unique filename for the photo
      const photoFilename = `${Date.now()}_${photoFile.name}`;

      // Upload the photo to Firebase Storage
      const photoUploadTask = storageRef.child(photoFilename).put(photoFile);

      photoUploadTask
        .then((snapshot) => {
          // Get the download URL of the uploaded photo
          return snapshot.ref.getDownloadURL();
        })
        .then((photoURL) => {
          // Register the user with Firebase Authentication
          return firebase.auth().createUserWithEmailAndPassword(this.username, this.password);
        })
        .then((userCredential) => {
          // Get the user ID and create a user record in the database
          const user = userCredential.user;
          const userId = user.uid;
          const userData = {
            fullName: this.fullName,
            lastName: this.lastName,
            username: this.username,
            phoneNumber: this.phoneNumber,
            photoURL: photoURL // Set the user's photoURL property to the download URL of the photo
          };

          // Store the user record in your Firebase Realtime Database or Firestore
          // Example using Firebase Realtime Database:
          return firebase.database().ref('users/' + userId).set(userData);
        })
        .then(() => {
          console.log('User registered successfully.');
          // You can redirect the user to another page or perform other actions here
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error registering user:', errorCode, errorMessage);
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
