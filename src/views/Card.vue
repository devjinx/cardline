<template>
  <center>
  <div>
    <div class="card">
      <div class="photo">
        <img src="path/to/photo.jpg" alt="User Photo">
      </div>
      <div class="name">First Name Last Name</div>
      <div class="username">@username</div>
    </div>
    <!-- Content for the Card component -->
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</center>
</template>

<script>
export default {
  props: {
  },
  name: 'Card',
  // Component options and logic
}
</script>

<style scoped>
/* Component-specific styles */
.card {
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.username {
  font-size: 16px;
  color: #777;
}
</style>