import {
  GET_CUR_USER_SUCCESS,
  GET_CUR_USER_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from '../actions/actionTypes'

export const usersReducer = (state, action = {}) => {
  switch (action.type) {
    case GET_CUR_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        getUserFail: null
      }
    case GET_CUR_USER_FAIL:
      return {
        ...state,
        user: {},
        getUserFail: action.payload.message
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        getUserFail: null
      }
    case GET_USERS_FAIL:
      return {
        ...state,
        userList: [],
        getUserFail: action.payload.message
      }
    default:
      return state
  }
}
