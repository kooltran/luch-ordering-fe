import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getAllOrdersRequest,
  getAllOrdersSuccess,
  getAllOrdersFail,
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFail
} from '../../actions/orderAction'
import { getPayment, getOrders } from '../../api/order'
import AllOrderItem from './AllOrderItem'
import { Switch } from 'antd'

import './Orders.scss'
import IconLoading from '../../assets/loading.svg'
import { groupByNTotal } from '../../helpers'

const Orders = () => {
  const [
    {
      allOrders: { allOrderList, isLoading }
    },
    dispatch
  ] = useAppContext()
  const [isDateMode, setDateMode] = useState(true)

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  const allOrderGrouped = allOrderList.map(order =>
    order.orders.map(item => item)
  )

  const allOrders = [].concat
    .apply([], allOrderGrouped)
    .map(item => ({ ...item, username: item.user.username }))

  const allOrdersByUser = groupByNTotal(allOrders, 'username')

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

    const getOrderList = async () => {
      dispatch(getOrdersRequest())
      try {
        const res = await getOrders()
        dispatch(getOrdersSuccess(res))
      } catch (error) {
        dispatch(getOrdersFail(error))
      }
    }
    getOrderList()

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
          allOrderList.length !== 0 &&
          allOrderList.map(item => (
            <AllOrderItem
              key={item._id}
              item={item}
              isAdmin={isAdmin}
              isAllOrders={true}
            />
          ))}
        {!isDateMode && (
          <div className='order-users'>
            {Object.keys(allOrdersByUser).map(item => {
              const orderByName = allOrdersByUser[item]
              return (
                <>
                  <div className='order-user__name'>
                    <span>{item}</span>
                  </div>
                  <div className='order-user__title'>
                    <span>Ngày Order</span>
                    <span>Số Lượng</span>
                    <span>Tên Món</span>
                    <span>Giá</span>
                  </div>
                  {orderByName.map(order => (
                    <div className='order-user__item' key={order._id}>
                      <span>{order.date}</span>
                      <span>{order.quantity}</span>
                      <span>{order.dish.name}</span>
                      <span>{order.dish.price}</span>
                    </div>
                  ))}
                </>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
