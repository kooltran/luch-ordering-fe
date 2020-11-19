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
  GET_ORDERS_HISTORY_REQUEST,
  GET_ORDERS_HISTORY_SUCCESS,
  GET_ORDERS_HISTORY_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
} from './actionTypes'

export const submitOrderRequest = () => ({
  type: SUBMIT_ORDERS_REQUEST,
})

export const submitOrderSuccess = () => ({
  type: SUBMIT_ORDERS_SUCCESS,
})

export const submitOrderFail = res => ({
  type: SUBMIT_ORDERS_FAIL,
  payload: res,
})

export const getOrdersRequest = () => ({
  type: GET_ORDERS_REQUEST,
})

export const getOrdersSuccess = res => ({
  type: GET_ORDERS_SUCCESS,
  payload: res,
})

export const getOrdersFail = err => ({
  type: GET_ORDERS_FAIL,
  payload: err,
})

export const getAllOrdersRequest = () => ({
  type: GET_ALL_ORDERS_REQUEST,
})

export const getAllOrdersSuccess = res => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload: res,
})

export const getAllOrdersFail = err => ({
  type: GET_ALL_ORDERS_FAIL,
  payload: err,
})

export const deleteOrderRequest = () => ({
  type: DELETE_ORDER_REQUEST,
})

export const deleteOrderSuccess = res => ({
  type: DELETE_ORDER_SUCCESS,
  payload: res,
})

export const deleteOrderFail = err => ({
  type: DELETE_ORDER_FAIL,
  payload: err,
})

export const getOrdersHistoryRequest = () => ({
  type: GET_ORDERS_HISTORY_REQUEST,
})

export const getOrdersHistorySuccess = res => ({
  type: GET_ORDERS_HISTORY_SUCCESS,
  payload: res,
})

export const getOrdersHistoryFail = err => ({
  type: GET_ORDERS_HISTORY_FAIL,
  payload: err,
})

export const updateOrderRequest = res => ({
  type: UPDATE_ORDER_REQUEST,
})

export const updateOrderSuccess = res => ({
  type: UPDATE_ORDER_SUCCESS,
  payload: res,
})

export const updateOrderFail = err => ({
  type: UPDATE_ORDER_FAIL,
  payload: err,
})
