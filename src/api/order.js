import axiosInstance from './axiosInstance'

export const createOrder = orders => {
  return axiosInstance.post(`/orders/create`, orders).then(res => res.data)
}

export const getOrders = () => {
  return axiosInstance.get(`/orders/list`).then(res => res.data)
}

export const getAllOrders = () => {
  return axiosInstance.get(`/orders/all`).then(res => res.data)
}

export const checkPaid = params => {
  return axiosInstance.post(`/orders/check-paid`, params).then(res => res.data)
}

export const checkProviderPaid = order => {
  return axiosInstance
    .post(`/orders/check-paid-provider`, order)
    .then(res => res.data)
}

export const checkPaidAllWeek = order => {
  return axiosInstance
    .post(`/orders/paid-allweeks`, order)
    .then(res => res.data)
}

export const deleteOrder = order => {
  return axiosInstance.post(`/orders/delete`, order).then(res => res.data)
}

export const getAllOrderDishes = () => {
  return axiosInstance.get(`/orders/get-all-orders`).then(res => res.data)
}

export const getPaymentByDate = () => {
  return axiosInstance.get('/orders/payment-by-date').then(res => res.data)
}

export const getPaymentByUser = () => {
  return axiosInstance.get('/orders/payment-by-user').then(res => res.data)
}

export const getPaymentByWeek = type => {
  return axiosInstance
    .get('/orders/payment-by-week', {
      params: {
        type
      }
    })
    .then(res => res.data)
}

export const getPaymentHistory = type => {
  return axiosInstance
    .get('/orders/payments', {
      params: {
        type
      }
    })
    .then(res => res.data)
}
