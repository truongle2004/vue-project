import axiosInstance from '@/utils/axiosInstance'

export const loginApi = ({ email, password }) => {
  return axiosInstance.post('http://localhost:3000/user/login', { email, password })
}
