<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/movies" class="nav-link">Movies</router-link>

        <div v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link">Login</router-link>
        </div>

        <div v-else>
          <router-link to="/profile" class="nav-link">Profile</router-link>
          <a @click="logout" class="nav-link">Logout</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navHeader",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>