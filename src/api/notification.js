import axios from 'axios'
import { DOMAIN } from '../constants'

export const pushNotification = subscription => {
  return axios.post(`${DOMAIN}/pushNoti/subscribe`, subscription)
}
