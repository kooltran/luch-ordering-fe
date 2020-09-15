import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getAllOrdersRequest,
  getAllOrdersSuccess,
  getAllOrdersFail,
  getAllOrdersByUserRequest,
  getAllOrdersByUserSuccess,
  getAllOrdersByUserFail
} from '../../actions/orderAction'
import { getPayment, getPaymentByUser } from '../../api/order'
import AllOrderItem from './AllOrderItem'
import { Switch } from 'antd'

import './Orders.scss'
import IconLoading from '../../assets/loading.svg'

const OrderList = () => {
  const [
    {
      allOrders: { allOrderList, isLoading, isCheckingPaid },
      allOrdersByUser: { allOrderListUser, isCheckingPaid: isCheckingAllWeek }
    },
    dispatch
  ] = useAppContext()
  const [isDateMode, setDateMode] = useState(true)

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  const allOrderListFomatted = allOrderList.map(item => {
    const totalPrice = item.orders.reduce(
      (acc, order) => acc + 35 * order.quantity,
      0
    )
    return {
      ...item,
      totalPrice: totalPrice
    }
  })

  const allOrderListUserFormatted = allOrderListUser.map(item => {
    console.log(item, 'item')
    const totalPrice =
      item.orders &&
      item.orders.reduce((acc, order) => acc + 35 * order.quantity, 0)
    return {
      ...item,
      totalPrice: totalPrice
    }
  })

  useEffect(() => {
    const getAllOrderList = async () => {
      dispatch(getAllOrdersRequest())
      try {
        const res = await getPayment()
        dispatch(getAllOrdersSuccess(res))
      } catch (error) {
        dispatch(getAllOrdersFail(error))
      }
    }

    const getAllOrderUserList = async () => {
      dispatch(getAllOrdersByUserRequest())
      try {
        const res = await getPaymentByUser()
        dispatch(getAllOrdersByUserSuccess(res))
      } catch (error) {
        dispatch(getAllOrdersByUserFail(error))
      }
    }
    getAllOrderUserList()

    getAllOrderList()
  }, [dispatch])

  const handleChangeOrderView = checked => setDateMode(checked)

  return (
    <div className='page'>
      <div className='order-wrapper'>
        <Switch
          className='btn-switch'
          defaultChecked={isDateMode}
          onChange={handleChangeOrderView}
        />
        <h1 className='order-title'>All Orders List</h1>
        {isLoading && (
          <img
            className='icon-loading'
            src={IconLoading}
            alt='loading-spinner'
          />
        )}
        {isDateMode &&
          allOrderListFomatted.length !== 0 &&
          allOrderListFomatted.map(item => (
            <AllOrderItem
              key={item._id}
              item={item}
              isAdmin={isAdmin}
              isAllOrders={true}
              isDateMode={isDateMode}
              isCheckingPaid={isCheckingPaid}
            />
          ))}
        {!isDateMode &&
          allOrderListUserFormatted.length !== 0 &&
          allOrderListUserFormatted.map(item => (
            <AllOrderItem
              key={item._id}
              item={item}
              isAdmin={isAdmin}
              isAllOrders={true}
              isDateMode={isDateMode}
              isCheckingPaid={isCheckingAllWeek}
            />
          ))}
      </div>
    </div>
  )
}

export default OrderList
