import { LOGIN_URL } from '@/constant'
import axiosInstance from '@/utils/axiosInstance'

export const loginApi = ({ email, password }) => {
  return axiosInstance.post(LOGIN_URL, { email, password })
}
