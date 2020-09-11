import {
  GET_CUR_USER_SUCCESS,
  GET_CUR_USER_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from './actionTypes'

export const getCurrentuserSuccess = res => ({
  type: GET_CUR_USER_SUCCESS,
  payload: res
})

export const getCurrentuserFail = response => ({
  type: GET_CUR_USER_FAIL,
  payload: response
})

export const getUsersSuccess = res => ({
  type: GET_USERS_SUCCESS,
  payload: res
})

export const getUsersFail = res => ({
  type: GET_USERS_FAIL,
  payload: res
})
