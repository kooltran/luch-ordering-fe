import {
  GET_ALL_ORDERS_BY_USER_REQUEST,
  GET_ALL_ORDERS_BY_USER_SUCCESS,
  GET_ALL_ORDERS_BY_USER_FAIL
} from '../actions/actionTypes'

export const getAllOrdersUserReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        allOrderListUser: [],
        getOrdersFail: null
      }
    case GET_ALL_ORDERS_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allOrderListUser: action.payload,
        getOrdersFail: null
      }
    case GET_ALL_ORDERS_BY_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        allOrderListUser: [],
        getOrdersFail: action.payload.message
      }
    default:
      return state
  }
}
