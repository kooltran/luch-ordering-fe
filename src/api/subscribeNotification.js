import axios from 'axios'
import { DOMAIN } from '../constants'

export const subscribeNotification = subscription => {
  return axios
    .post(`${DOMAIN}/subscribe`, subscription, {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.data)
}
