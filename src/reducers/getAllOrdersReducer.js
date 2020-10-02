import {
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
  CHECK_PROVIDER_PAID_REQUEST,
  CHECK_PROVIDER_PAID_SUCCESS,
  CHECK_PROVIDER_PAID_FAIL,
  CHECK_PAID_ORDER_ITEM_REQUEST,
  CHECK_PAID_ORDER_ITEM_SUCCESS,
  CHECK_PAID_ORDER_ITEM_FAIL,
  CHECK_PAID_ALL_WEEK_REQUEST,
  CHECK_PAID_ALL_WEEK_SUCCESS,
  CHECK_PAID_ALL_WEEK_FAIL,
  GET_ORDERS_HISTORY_REQUEST,
  GET_ORDERS_HISTORY_SUCCESS,
  GET_ORDERS_HISTORY_FAIL,
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
        checkPaidFail: null,
      }
    case GET_ALL_ORDERS_SUCCESS:
      const { data, type } = action.payload
      const orderListRes = groupByNTotal(data, type, 'username')
      return {
        ...state,
        isLoading: false,
        allOrderList: orderListRes,
        getOrdersFail: null,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        allOrderList: [],
        getOrdersFail: action.payload.message,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case GET_ORDERS_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        allOrderList: [],
        getOrdersFail: null,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case GET_ORDERS_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allOrderList: action.payload,
        getOrdersFail: null,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case GET_ORDERS_HISTORY_FAIL:
      return {
        ...state,
        isLoading: false,
        allOrderList: [],
        getOrdersFail: action.payload.message,
        isCheckingPaid: false,
        checkPaidFail: null,
      }
    case CHECK_PROVIDER_PAID_REQUEST:
      return {
        ...state,
        isLoading: false,
        getOrdersFail: null,
        isCheckingPaid: true,
        checkPaidFail: null,
      }
    case CHECK_PROVIDER_PAID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getOrdersFail: null,
        isCheckingPaid: false,
        allOrderList: action.payload,
        checkPaidFail: null,
      }
    case CHECK_PROVIDER_PAID_FAIL:
      return {
        ...state,
        isLoading: false,
        getOrdersFail: null,
        isCheckingPaid: false,
        allOrderList: [],
        checkPaidFail: action.payload,
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
      const orderListPaidAllWeek = groupByNTotal(
        action.payload,
        'user',
        'username'
      )

      return {
        ...state,
        isCheckingPaid: false,
        allOrderList: orderListPaidAllWeek,
        checkPaidFail: null,
        isLoading: false,
        getOrdersFail: null,
      }
    case CHECK_PAID_ALL_WEEK_FAIL:
      return {
        ...state,
        isCheckingPaid: false,
        allOrderList: [],
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
      const { data: paidData, type: paidType } = action.payload
      const orderListPaid = groupByNTotal(paidData, paidType, 'username')

      return {
        ...state,
        isCheckingPaid: false,
        allOrderList: orderListPaid,
      }
    case CHECK_PAID_ORDER_ITEM_FAIL:
      return {
        ...state,
        isCheckingPaid: false,
        allOrderList: [],
        checkPaidFail: action.payload,
      }
    default:
      return state
  }
}
