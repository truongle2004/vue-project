import { ref } from 'vue'

export const useAuth = () => {
  const token = ref(null)

  const userInfo = ref({})

  const setToken = (newToken) => {
    token.value = newToken
  }

  const setUserInfo = (newUserInfo) => {
    userInfo.value = newUserInfo
  }

  const getUserInfo = () => userInfo

  return {
    setToken,
    setUserInfo,
    getUserInfo
  }
}
