<template>
  <center>
  <h2>Card Search</h2>
  <input type="text" id="searchText" placeholder="Enter your search query">
  <button onclick="search()">Search</button>
  <p></p>
  </center>
<router-view></router-view>
</template>

<script>
//script
function search() {
        var searchText = document.getElementById("searchText").value;
        // Perform the desired search operation with the searchText
        // Replace the code below with your own logic

        alert("You searched for: " + searchText);
      }
</script>