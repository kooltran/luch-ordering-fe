import {
  CHECK_PAID_REQUEST,
  CHECK_PAID_SUCCESS,
  CHECK_PAID_FAIL,
  CHECK_PROVIDER_PAID_REQUEST,
  CHECK_PROVIDER_PAID_SUCCESS,
  CHECK_PROVIDER_PAID_FAIL,
  CHECK_PAID_ALL_WEEK_REQUEST,
  CHECK_PAID_ALL_WEEK_SUCCESS,
  CHECK_PAID_ALL_WEEK_FAIL
} from '../actions/actionTypes'

export const checkPaidReducer = (state, action) => {
  switch (action.type) {
    case CHECK_PAID_REQUEST:
    case CHECK_PROVIDER_PAID_REQUEST:
    case CHECK_PAID_ALL_WEEK_REQUEST:
      return {
        ...state,
        isPaidLoading: true,
        isPaidSuccess: false,
        checkPaidFail: null
      }
    case CHECK_PAID_SUCCESS:
    case CHECK_PROVIDER_PAID_SUCCESS:
    case CHECK_PAID_ALL_WEEK_SUCCESS:
      return {
        ...state,
        isPaidLoading: false,
        isPaidSuccess: true,
        checkPaidFail: null
      }
    case CHECK_PAID_FAIL:
    case CHECK_PROVIDER_PAID_FAIL:
    case CHECK_PAID_ALL_WEEK_FAIL:
      return {
        ...state,
        isPaidLoading: false,
        isPaidSuccess: false,
        checkPaidFail: action.payload
      }
    default:
      return state
  }
}
