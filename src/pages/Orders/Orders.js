import React, { useEffect } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFail,
} from '../../actions/orderAction'
import OrderItem from './OrderItem'
import { getOrders } from '../../api/order'

import { groupByNTotal } from '../../helpers'

import { useFetchMenu } from '../../components/Menu/useFetchMenu'
import { useFetchUsers } from './useFetchUsers'

import './Orders.scss'
import IconLoading from '../../assets/loading.svg'

const Orders = () => {
  const [
    {
      orders: { orderList, isOrdersLoading },
    },
    dispatch,
  ] = useAppContext()
  const fetchMenuList = useFetchMenu()
  const fetchUsersList = useFetchUsers()

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  useEffect(() => {
    const getOrderList = async () => {
      dispatch(getOrdersRequest())
      try {
        const res = await getOrders()
        dispatch(getOrdersSuccess(res))
      } catch (error) {
        dispatch(getOrdersFail(error))
      }
    }
    fetchMenuList()
    fetchUsersList()
    getOrderList()
  }, [dispatch, fetchMenuList, fetchUsersList])

  // const orderList = orderList.sort(
  //   (a, b) => a.dish && a.dish.name.localeCompare(b.name)
  // )

  const formattedOrderList = orderList.map(order => ({
    quantity: order.quantity,
    dishName: order.extraDish ? `${order.extraDish} thêm` : order.dish.name,
    price: parseInt(order.dish.price.slice(0, 2)),
  }))

  const orderListGroupByDishname = groupByNTotal(formattedOrderList, 'dishName')

  const orderListTotalQty = Object.keys(orderListGroupByDishname).map(item => ({
    name: item,
    qty: orderListGroupByDishname[item].reduce(
      (acc, ele) => acc + ele.quantity,
      0
    ),
    price: orderListGroupByDishname[item].reduce(
      (acc, ele) => acc + ele.price * ele.quantity,
      0
    ),
  }))

  const totalQtyDishes = orderListTotalQty.reduce(
    (acc, item) => acc + item.qty,
    0
  )

  const totalPriceDishes = orderListTotalQty.reduce(
    (acc, item) => acc + item.price,
    0
  )

  return (
    <div className='page'>
      <div className='order-wrapper'>
        <h1 className='order-title'>Orders List</h1>
        {isOrdersLoading && (
          <img
            className='icon-loading'
            src={IconLoading}
            alt='loading-spinner'
          />
        )}
        {orderList.length !== 0 && (
          <div className='order-total'>
            <h3 className='title'>Total List</h3>
            <div className='header'>
              <span>Tên món</span>
              <span>Số Lượng</span>
              <span>Giá</span>
            </div>
            {orderListTotalQty.map(order => (
              <div key={order.name} className='item'>
                <span>{order.extraDish || order.name}</span>
                <span>{order.qty}</span>
                <span>{`${order.price}.000đ`}</span>
              </div>
            ))}
            <div className='total'>
              <span>Tổng cộng</span>
              <span>{totalQtyDishes}</span>
              <span>{`${totalPriceDishes}.000đ`}</span>
            </div>
          </div>
        )}
        {orderList.length !== 0 && (
          <div className='order-content'>
            <div className='order-item__header'>
              <span>Người Order</span>
              <span>Số Lượng</span>
              <span className='dish-name'>Tên Món</span>
              <span>Ngày Order</span>
              <span>Giá</span>
              {isAdmin && (
                <>
                  <span className='delete'></span>
                  <span className='edit'></span>
                </>
              )}
            </div>
            {orderList.map(order => (
              <OrderItem
                key={order._id}
                order={order}
                isAdmin={isAdmin}
                isAllOrders={false}
                type='date'
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
