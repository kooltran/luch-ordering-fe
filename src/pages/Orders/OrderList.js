import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getAllOrdersRequest,
  getAllOrdersSuccess,
  getAllOrdersFail
} from '../../actions/orderAction'
import SelectType from '../../components/SelectType/SelectType'
import { getPayment } from '../../api/order'
import AllOrderItem from './AllOrderItem'

import './Orders.scss'
import IconLoading from '../../assets/loading.svg'

const OrderList = () => {
  const [
    {
      allOrders: { allOrderList, isLoading, isCheckingPaid }
    },
    dispatch
  ] = useAppContext()
  const [type, setType] = useState('date')

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  const allOrderListFomatted = allOrderList
    .map(item => {
      const totalPrice = item.orders.reduce(
        (acc, order) => acc + 35 * order.quantity,
        0
      )

      const totalQty = item.orders.reduce(
        (acc, order) => acc + order.quantity,
        0
      )

      return {
        ...item,
        totalPrice,
        totalQty
      }
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  const getAllOrdersList = async type => {
    dispatch(getAllOrdersRequest())

    try {
      const data = await getPayment(type)
      const res = data.filter(item => item.orders.length > 0)
      dispatch(getAllOrdersSuccess(res))
    } catch (error) {
      dispatch(getAllOrdersFail(error))
    }
  }

  useEffect(() => {
    getAllOrdersList('date')
  }, [dispatch])

  const handleChangeType = value => {
    setType(value)
    getAllOrdersList(value)
  }

  return (
    <div className='page'>
      <div className='order-wrapper'>
        <SelectType
          handleChangeType={handleChangeType}
          className='order-filter'
        />
        <h1 className='order-title'>All Orders List</h1>
        {isLoading && (
          <img
            className='icon-loading'
            src={IconLoading}
            alt='loading-spinner'
          />
        )}
        {allOrderListFomatted.length !== 0 &&
          allOrderListFomatted.map(item => (
            <AllOrderItem
              key={item._id}
              item={item}
              isAdmin={isAdmin}
              isAllOrders={true}
              isCheckingPaid={isCheckingPaid}
              type={type}
            />
          ))}
      </div>
    </div>
  )
}

export default OrderList
