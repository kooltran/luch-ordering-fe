import axios from 'axios'
import { DOMAIN } from '../constants'

export const fetchCurrentUser = () => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${DOMAIN}/users/current`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}

export const fetchUsers = () => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${DOMAIN}/users`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}
