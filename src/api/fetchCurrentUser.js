import axios from 'axios'
import { DOMAIN } from '../constants'

export const fetchCurrentUser = () => {
  return axios
    .get(`${DOMAIN}/user`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
      withCredentials: true,
    })
    .then(res => res.data)
}
