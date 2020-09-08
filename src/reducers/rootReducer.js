import { getMenuReducer } from './getMenuReducer'
import { getCurUserReducer } from './getCurrentUserReducer'
import { cartReducer } from './cartReducer'
import { submitOrderReducer } from './submitOrderReducer'
import { getOrdersReducer } from './getOrdersReducer'
import { getAllOrdersReducer } from './getAllOrdersReducer'
import { setOrderTimeout } from './setOrderTimeout'
import combineReducers from 'react-combine-reducers'

const menuInitState = {
  menuList: [],
  isLoading: false,
  getMenuFail: null
}

const currentUserInitState = {
  user: {},
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
  orderList: [],
  isLoading: false,
  getOrdersFail: null
}

const orderTimeoutInitState = {
  isOrderTimeout: false
}

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, menuInitState],
  currentUser: [getCurUserReducer, currentUserInitState],
  cart: [cartReducer, cartReducerInitState],
  submitOrder: [submitOrderReducer, submitorderReducerInitState],
  orders: [getOrdersReducer, orderListReducerInitState],
  orderTimeout: [setOrderTimeout, orderTimeoutInitState],
  allOrders: [getAllOrdersReducer, allOrderListReducerInitState]
})

export { rootReducer, initialStateCombined }
