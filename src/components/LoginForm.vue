<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-secondary text-white">Login</div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" v-model="user.email" required>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="user.password" required>
              </div>

              <button type="submit" class="btn btn-primary btn-block">Login</button>
              <router-link to="/register">
                <button>Register</button>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    loginUser() {
      // POST to authenticate user
      axios.post('http://localhost:8000/login', this.user)
        .then(response => {
          console.log('User authenticated:', response.data);
        })
        .catch(error => {
          console.error('Login failed:', error);
        });
    },
  },
};
</script>