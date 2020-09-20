import axios from 'axios'
import { DOMAIN } from '../constants'

const axiosInstance = axios.create({
  baseURL: DOMAIN
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export default axiosInstance
