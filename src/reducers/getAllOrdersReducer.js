import {
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
  CHECK_PROVIDER_PAID_REQUEST,
  CHECK_PROVIDER_PAID_SUCCESS,
  CHECK_PROVIDER_PAID_FAIL,
  CHECK_PAID_ORDER_ITEM_REQUEST,
  CHECK_PAID_ORDER_ITEM_SUCCESS,
  CHECK_PAID_ORDER_ITEM_FAIL
} from '../actions/actionTypes'
import { groupByNTotal } from '../helpers'

export const getAllOrdersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        allOrderList: [],
        getOrdersFail: null,
        isCheckingPaid: false,
        checkPaidFail: null
      }
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allOrderList: action.payload,
        getOrdersFail: null,
        isCheckingPaid: false,
        checkPaidFail: null
      }
    case GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        allOrderList: [],
        getOrdersFail: action.payload.message,
        isCheckingPaid: false,
        checkPaidFail: null
      }
    case CHECK_PROVIDER_PAID_REQUEST:
      return {
        ...state,
        isLoading: false,
        getOrdersFail: null,
        isCheckingPaid: true,
        checkPaidFail: null
      }
    case CHECK_PROVIDER_PAID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getOrdersFail: null,
        isCheckingPaid: false,
        allOrderList: action.payload,
        checkPaidFail: null
      }
    case CHECK_PROVIDER_PAID_FAIL:
      return {
        ...state,
        isLoading: false,
        getOrdersFail: null,
        isCheckingPaid: false,
        allOrderList: [],
        checkPaidFail: action.payload
      }
    case CHECK_PAID_ORDER_ITEM_REQUEST:
      return {
        ...state,
        isCheckingPaid: true
      }
    case CHECK_PAID_ORDER_ITEM_SUCCESS:
      const { allOrderList } = state
      const orderList = action.payload
      const orderListByDate = groupByNTotal(orderList, 'date')
      const res = allOrderList.map(order => ({
        ...order,
        orders: orderListByDate[order.createdAt]
      }))

      return {
        ...state,
        isCheckingPaid: false,
        allOrderList: res
      }
    case CHECK_PAID_ORDER_ITEM_FAIL:
      return {
        ...state,
        isCheckingPaid: false,
        allOrderList: [],
        checkPaidFail: action.payload
      }
    default:
      return state
  }
}
