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
        <p>User name</p>
        <input v-model="form.username" type="text" required />
      </div>
      <div class="email">
        <p>Email</p>
        <input v-model="form.email" type="email" required />
      </div>
      <div class="password">
        <p>Password</p>
        <input v-model="form.password" type="password" required />
      </div>
      <div class="confirm-password">
        <p>Confirm Password</p>
        <input v-model="form.confirmPassword" type="password" required />
      </div>

      <button class="btn-login" type="submit">Login</button>
    </form>
    <p>You already have an account?</p>
    <a class="login" href="/login">Login</a>
  </div>
</template>

<style src="../index.css" />
