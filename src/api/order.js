import axios from 'axios'
import { DOMAIN } from '../constants'

export const createOrder = orders => {
  const token = localStorage.getItem('token')

  return axios
    .post(`${DOMAIN}/orders/create`, orders, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}

export const getOrders = () => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${DOMAIN}/orders/list`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}

export const getAllOrders = () => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${DOMAIN}/orders/all`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}

export const checkPaid = params => {
  const token = localStorage.getItem('token')
  return axios
    .post(`${DOMAIN}/orders/check-paid`, params, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}

export const deleteOrder = order => {
  const token = localStorage.getItem('token')
  return axios
    .post(`${DOMAIN}/orders/delete`, order, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}

export const getAllOrderDishes = () => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${DOMAIN}/orders/get-all-orders`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}

export const getPayment = () => {
  const token = localStorage.getItem('token')
  return axios
    .get(`${DOMAIN}/orders/payment`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
}
