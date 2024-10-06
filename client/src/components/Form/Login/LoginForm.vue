<script setup>
import { reactive } from 'vue'

const form = reactive({
  email: '',
  password: ''
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
    <h1>Login</h1>
    <form @submit.prevent="validateForm">
      <div class="email">
        <p>Email</p>
        <input v-model="form.email" type="email" required />
      </div>
      <div class="password">
        <p>Password</p>
        <input v-model="form.password" type="password" required />
      </div>
      <button class="btn-login" type="submit">Login</button>
    </form>
    <p>You don't have an account?</p>
    <a class="register" href="/register">Register</a>
  </div>
</template>

<style src="../index.css"></style>
