<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const validateForm = () => {
  if (!form.email || !form.password) {
    alert('Both fields are required!')
    return false
  }
  alert('Form submitted successfully!')
  return true
}
</script>

<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit.prevent="validateForm">
      <div class="username">
        <label class="form-label">User name</label>
        <input
          v-model="form.username"
          type="text"
          class="form-control username"
          id="username"
          required
        />
      </div>
      <div class="email">
        <label class="form-label">Email</label>
        <input v-model="form.email" type="email" class="form-control email" id="email" required />
      </div>
      <div class="password">
        <label class="form-label">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control password"
          id="password"
          required
        />
      </div>
      <div class="confirm-password">
        <label class="form-label">Confirm Password</label>
        <input
          v-model="form.confirmPassword"
          type="password"
          class="form-control confirmPassword"
          id="password"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit" style="width: 100%">Login</button>
    </form>
    <p>You already have an account?</p>
    <a class="login" href="/login">Login</a>
  </div>
</template>
