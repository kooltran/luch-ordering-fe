import { useAppContext } from "../../AppContext";
import {
  submitOrderRequest,
  submitOrderSuccess,
  submitOrderFail
} from "../../actions/orderAction";
import { deleteCart } from "../../actions/cartAction";
import { createOrder } from "../../api/order";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export const useSubmitOrder = () => {
  const [, dispatch] = useAppContext();
  let history = useHistory();

  const submitOrders = useCallback(
    async orders => {
      dispatch(submitOrderRequest());
      try {
        const res = await createOrder(orders);
        dispatch(submitOrderSuccess(res));
        dispatch(deleteCart());
        history.push("/orders");
      } catch (error) {
        dispatch(submitOrderFail(error));
      }
    },
    [dispatch, history]
  );

  return submitOrders;
};
