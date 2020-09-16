import {
  GET_ALL_ORDERS_BY_USER_REQUEST,
  GET_ALL_ORDERS_BY_USER_SUCCESS,
  GET_ALL_ORDERS_BY_USER_FAIL,
  CHECK_PAID_ALL_WEEK_REQUEST,
  CHECK_PAID_ALL_WEEK_SUCCESS,
  CHECK_PAID_ALL_WEEK_FAIL,
  CHECK_PAID_ORDER_ITEM_REQUEST,
  CHECK_PAID_ORDER_ITEM_SUCCESS,
  CHECK_PAID_ORDER_ITEM_FAIL,
} from '../actions/actionTypes'
import { groupByNTotal } from '../helpers'

export const getAllOrdersUserReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        allOrderListUser: [],
        getOrdersFail: null,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case GET_ALL_ORDERS_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allOrderListUser: action.payload,
        getOrdersFail: null,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case GET_ALL_ORDERS_BY_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        allOrderListUser: [],
        getOrdersFail: action.payload.message,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case CHECK_PAID_ALL_WEEK_REQUEST:
      return {
        ...state,
        isCheckingPaid: true,
        checkPaidFail: null,
        isLoading: false,
        getOrdersFail: null,
      }
    case CHECK_PAID_ALL_WEEK_SUCCESS:
      return {
        ...state,
        isCheckingPaid: false,
        allOrderListUser: action.payload,
        checkPaidFail: null,
        isLoading: false,
        getOrdersFail: null,
      }
    case CHECK_PAID_ALL_WEEK_FAIL:
      return {
        ...state,
        isCheckingPaid: false,
        allOrderListUser: [],
        checkPaidFail: action.payload.message,
        isLoading: false,
        getOrdersFail: null,
      }
    case CHECK_PAID_ORDER_ITEM_REQUEST:
      return {
        ...state,
        isCheckingPaid: true,
      }
    case CHECK_PAID_ORDER_ITEM_SUCCESS:
      const { allOrderListUser } = state
      const orderListPaid = action.payload
      const allOrderListUserPaid = allOrderListUser.map(item => {
        const orderListPaidById = groupByNTotal(orderListPaid, '_id')
        const ordersPaid = item.orders.map(
          order => orderListPaidById[order._id][0]
        )
        return { ...item, orders: ordersPaid }
      })

      return {
        ...state,
        isCheckingPaid: false,
        allOrderListUser: allOrderListUserPaid,
        checkPaidFail: null,
      }
    case CHECK_PAID_ORDER_ITEM_FAIL:
      return {
        ...state,
        isCheckingPaid: false,
        allOrderListUser: [],
        checkPaidFail: action.payload,
      }
    default:
      return state
  }
}
