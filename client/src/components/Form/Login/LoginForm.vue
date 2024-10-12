<!-- eslint-disable no-unused-vars -->
<script setup>
import { loginApi } from '@/apis/login'
import router from '@/router'
import { useMutation } from '@tanstack/vue-query'
import { reactive } from 'vue'
import { useAuth } from '@/hooks/useAuth'

const form = reactive({
  email: '',
  password: ''
})

const { isPending, isError, error, isSuccess, mutate } = useMutation({
  mutationFn: loginApi
})

const { setToken, setUserInfo } = useAuth()

const handleLogin = () => {
  console.log('is called')
  if (validateForm()) {
    mutate(form, {
      onSuccess: (data) => {
        const { accessToken, user } = data
        setToken(accessToken)
        setUserInfo(user)
        router.push({
          path: '/'
        })
      }
    })
  }
}

const validateForm = () => {
  if (!form.email || !form.password) {
    alert('Both fields are required!')
    return false
  }
  return true
}
</script>

<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="form.email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          id="password"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/register">Register</a></p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.form-control {
  width: 300px;
}

.mb-3 {
  margin-bottom: 15px;
}
</style>
