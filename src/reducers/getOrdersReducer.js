import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL
} from '../actions/actionTypes'

export const getOrdersReducer = (state, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        isOrdersLoading: true,
        orderList: [],
        getOrdersFail: null,
        deleteOrderRequest: false,
        deleteOrderFail: null
      }
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        isOrdersLoading: false,
        orderList: action.payload,
        getOrdersFail: null,
        deleteOrderRequest: false,
        deleteOrderFail: null
      }
    case GET_ORDERS_FAIL:
      return {
        ...state,
        isOrdersLoading: false,
        orderList: [],
        getOrdersFail: action.payload.message,
        deleteOrderRequest: false,
        deleteOrderFail: null
      }
    case DELETE_ORDER_REQUEST: {
      return {
        ...state,
        isOrdersLoading: false,
        getOrdersFail: null,
        deleteOrderRequest: true,
        deleteOrderFail: null
      }
    }
    case DELETE_ORDER_SUCCESS: {
      const deletedOrder = action.payload
      const { orderList } = state
      return {
        ...state,
        isOrdersLoading: false,
        orderList: orderList.filter(order => order._id !== deletedOrder._id),
        getOrdersFail: null,
        deleteOrderRequest: false,
        deleteOrderFail: null
      }
    }
    case DELETE_ORDER_FAIL: {
      return {
        ...state,
        isOrdersLoading: false,
        orderList: [],
        getOrdersFail: null,
        deleteOrderRequest: false,
        deleteOrderFail: action.payload.message
      }
    }
    case UPDATE_ORDER_REQUEST: {
      return {
        ...state,
        isOrdersLoading: false,
        getOrdersFail: null,
        updateOrderRequest: true,
        updateOrderFail: null
      }
    }
    case UPDATE_ORDER_SUCCESS: {
      const updatedOrder = action.payload
      const { orderList } = state

      return {
        ...state,
        isOrdersLoading: false,
        orderList: orderList.map(order =>
          order._id === updatedOrder._id ? updatedOrder : order
        ),
        getOrdersFail: null,
        deleteOrderRequest: false,
        deleteOrderFail: null
      }
    }
    case UPDATE_ORDER_FAIL: {
      return {
        ...state,
        isOrdersLoading: false,
        orderList: [],
        getOrdersFail: null,
        updateOrderRequest: false,
        updateOrderFail: action.payload.message
      }
    }
    default:
      return state
  }
}
