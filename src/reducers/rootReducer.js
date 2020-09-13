import { getMenuReducer } from './getMenuReducer'
import { usersReducer } from './usersReducer'
import { cartReducer } from './cartReducer'
import { submitOrderReducer } from './submitOrderReducer'
import { getOrdersReducer } from './getOrdersReducer'
import { getAllOrdersReducer } from './getAllOrdersReducer'
import { setOrderTimeout } from './setOrderTimeout'
import { checkPaidReducer } from './checkPaidReducer'
import combineReducers from 'react-combine-reducers'

const menuInitState = {
  menuList: [],
  isLoading: false,
  getMenuFail: null
}

const usersInitState = {
  user: {},
  users: [],
  userFail: null
}

const cartReducerInitState = {
  cartList: [],
  isAnimateCart: false,
  isCartAdded: false
}

const submitorderReducerInitState = {
  createOrderSuccess: false,
  isLoading: false,
  submitOrderFail: null
}

const orderListReducerInitState = {
  orderList: [],
  isOrdersLoading: false,
  getOrdersFail: null,
  deleteOrderRequest: false,
  deleteOrderFail: null
}

const allOrderListReducerInitState = {
  allOrderList: [],
  isLoading: false,
  getOrdersFail: null
}

const orderTimeoutInitState = {
  isOrderTimeout: false
}

const checkPaidInitState = {
  isPaidLoading: false,
  isPaidSuccess: false,
  checkPaidFail: null
}

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, menuInitState],
  users: [usersReducer, usersInitState],
  cart: [cartReducer, cartReducerInitState],
  submitOrder: [submitOrderReducer, submitorderReducerInitState],
  orders: [getOrdersReducer, orderListReducerInitState],
  orderTimeout: [setOrderTimeout, orderTimeoutInitState],
  allOrders: [getAllOrdersReducer, allOrderListReducerInitState],
  checkPaid: [checkPaidReducer, checkPaidInitState]
})

export { rootReducer, initialStateCombined }
