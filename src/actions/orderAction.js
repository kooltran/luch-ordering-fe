import {
  SUBMIT_ORDERS_REQUEST,
  SUBMIT_ORDERS_SUCCESS,
  SUBMIT_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
  GET_ALL_ORDERS_BY_USER_REQUEST,
  GET_ALL_ORDERS_BY_USER_SUCCESS,
  GET_ALL_ORDERS_BY_USER_FAIL
} from './actionTypes'

export const submitOrderRequest = () => ({
  type: SUBMIT_ORDERS_REQUEST
})

export const submitOrderSuccess = () => ({
  type: SUBMIT_ORDERS_SUCCESS
})

export const submitOrderFail = res => ({
  type: SUBMIT_ORDERS_FAIL,
  payload: res
})

export const getOrdersRequest = () => ({
  type: GET_ORDERS_REQUEST
})

export const getOrdersSuccess = res => ({
  type: GET_ORDERS_SUCCESS,
  payload: res
})

export const getOrdersFail = err => ({
  type: GET_ORDERS_FAIL,
  payload: err
})

export const getAllOrdersRequest = () => ({
  type: GET_ALL_ORDERS_REQUEST
})

export const getAllOrdersSuccess = res => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload: res
})

export const getAllOrdersFail = err => ({
  type: GET_ALL_ORDERS_FAIL,
  payload: err
})

export const deleteOrderRequest = () => ({
  type: DELETE_ORDER_REQUEST
})

export const deleteOrderSuccess = res => ({
  type: DELETE_ORDER_SUCCESS,
  payload: res.data
})

export const deleteOrderFail = err => ({
  type: DELETE_ORDER_FAIL,
  payload: err
})

export const getAllOrdersByUserRequest = () => ({
  type: GET_ALL_ORDERS_BY_USER_REQUEST
})

export const getAllOrdersByUserSuccess = res => ({
  type: GET_ALL_ORDERS_BY_USER_SUCCESS,
  payload: res
})

export const getAllOrdersByUserFail = err => ({
  type: GET_ALL_ORDERS_BY_USER_FAIL,
  payload: err
})
