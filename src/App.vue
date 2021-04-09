<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">TutorialStore</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
       
        <div v-if="haveId">
         <li  class="nav-item">
          <router-link  to="/login" class="nav-link">sign in</router-link>
        </li>
        </div>
        <div v-else>
        <li  class="nav-item">
          <router-link to="/signup" class="nav-link">signup</router-link>
        </li>
        </div>
  
  </div>
     
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  description: "app",
  data() {
    return {
      userId:null,
      haveId: false,
    }
  },
};
</script>
