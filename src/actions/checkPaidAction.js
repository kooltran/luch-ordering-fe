import {
  CHECK_PAID_REQUEST,
  CHECK_PAID_SUCCESS,
  CHECK_PAID_FAIL
} from "./actionTypes";

export const checkPaidRequest = () => ({
  type: CHECK_PAID_REQUEST
});

export const checkPaidSuccess = () => ({
  type: CHECK_PAID_SUCCESS
});

export const checkPaidFail = res => ({
  type: CHECK_PAID_FAIL,
  payload: res
});
