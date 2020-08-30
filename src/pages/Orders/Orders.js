import React, { useEffect } from "react";
import { useAppContext } from "../../AppContext";

import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFail
} from "../../actions/orderAction";
import OrderItem from "./OrderItem";
import { getOrders } from "../../api/order";

import { groupByNTotal } from "../../helpers";

import "./Orders.scss";
import IconLoading from "../../assets/loading.svg";

const Orders = () => {
  const [
    {
      orders: { orderList, isLoading }
    },
    dispatch
  ] = useAppContext();

  const roles = localStorage.getItem("roles");
  const isAdmin = roles === "admin";

  useEffect(() => {
    const getOrderList = async orders => {
      dispatch(getOrdersRequest());
      try {
        const res = await getOrders();
        dispatch(getOrdersSuccess(res));
        // dispatch(deleteCart())
      } catch (error) {
        dispatch(getOrdersFail(error));
      }
    };
    getOrderList();
  }, [dispatch]);
  const sortedList = orderList.sort((a, b) =>
    a.dish_name.localeCompare(b.dish_name)
  );

  const orderListGroupByDishname = groupByNTotal(orderList, "dish_name");

  const orderListTotalQty = Object.keys(orderListGroupByDishname).map(item => ({
    name: item,
    qty: orderListGroupByDishname[item].reduce(
      (acc, ele) => acc + ele.quantity,
      0
    )
  }));
  const totalDishes = orderListTotalQty.reduce(
    (acc, item) => acc + item.qty,
    0
  );
  return (
    <div className="order-wrapper">
      <h1 className="order-title">Orders List</h1>
      {orderList.length !== 0 && (
        <div className="order-total">
          <h3 className="title">Total List</h3>
          {orderListTotalQty.map(order => (
            <div key={order.name} className="item">
              <span>{order.name}</span>
              <span>{order.qty}</span>
            </div>
          ))}
          <div className="total">
            <span>Tổng cộng</span>
            <span>{totalDishes}</span>
          </div>
        </div>
      )}
      {isLoading && (
        <img className="icon-loading" src={IconLoading} alt="loading-spinner" />
      )}
      {sortedList.length !== 0 && (
        <div className="order-content">
          <div className="order-item__title">
            <span>Tên Món</span>
            <span>Số Lượng</span>
            <span>Ngày Order</span>
            <span>Người Order</span>
            {isAdmin && <span className="paid">Paid</span>}
          </div>
          {sortedList.map(order => (
            <OrderItem key={order._id} order={order} isAdmin={isAdmin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
