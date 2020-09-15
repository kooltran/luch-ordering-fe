import {
  CHECK_PROVIDER_PAID_REQUEST,
  CHECK_PROVIDER_PAID_SUCCESS,
  CHECK_PROVIDER_PAID_FAIL,
  CHECK_PAID_ALL_WEEK_REQUEST,
  CHECK_PAID_ALL_WEEK_SUCCESS,
  CHECK_PAID_ALL_WEEK_FAIL,
  CHECK_PAID_ORDER_ITEM_REQUEST,
  CHECK_PAID_ORDER_ITEM_SUCCESS,
  CHECK_PAID_ORDER_ITEM_FAIL
} from './actionTypes'

// check paid item action
export const checkPaidOrderItemRequest = () => ({
  type: CHECK_PAID_ORDER_ITEM_REQUEST
})

export const checkPaidOrderItemSuccess = res => ({
  type: CHECK_PAID_ORDER_ITEM_SUCCESS,
  payload: res
})

export const checkPaidOrderItemFail = () => ({
  type: CHECK_PAID_ORDER_ITEM_FAIL
})

// check paid provider action
export const checkProviderPaidRequest = () => ({
  type: CHECK_PROVIDER_PAID_REQUEST
})

export const checkProviderPaidSuccess = res => ({
  type: CHECK_PROVIDER_PAID_SUCCESS,
  payload: res
})

export const checkProviderPaidFail = res => ({
  type: CHECK_PROVIDER_PAID_FAIL,
  payload: res
})

// check paid all week action
export const checkPaidAllWeekRequest = () => ({
  type: CHECK_PAID_ALL_WEEK_REQUEST
})

export const checkPaidAllWeekSuccess = res => ({
  type: CHECK_PAID_ALL_WEEK_SUCCESS,
  payload: res
})

export const checkPaidAllWeekFail = res => ({
  type: CHECK_PAID_ALL_WEEK_FAIL,
  payload: res
})
