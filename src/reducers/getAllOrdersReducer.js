import {
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL
} from '../actions/actionTypes'

export const getAllOrdersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        allOrderList: [],
        getOrdersFail: null
      }
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allOrderList: action.payload,
        getOrdersFail: null
      }
    case GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        allOrderList: [],
        getOrdersFail: action.payload.message
      }
    default:
      return state
  }
}
