<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-secondary text-white">Register</div>
          <div class="card-body">
            <form @submit.prevent="registerUser">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" v-model="user.name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" v-model="user.email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="user.password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Register</button>
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
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    registerUser() {
      // POST to register user
      axios.post('http://localhost:8000/register', this.user)
        .then(response => {
          console.log('User registered:', response.data);
          this.$toastr.s('Success message', 'Success');
        })
        .catch(error => {
          console.error('Registration failed:', error);
          this.$toastr.e('Error message', 'Error');
        });
    },
  },
};
</script>