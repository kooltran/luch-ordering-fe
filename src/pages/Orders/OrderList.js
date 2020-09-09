import React, { useEffect } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getAllOrdersRequest,
  getAllOrdersSuccess,
  getAllOrdersFail
} from '../../actions/orderAction'
import { getAllOrders, getAllOrderDishes } from '../../api/order'
import OrderItem from './OrderItem'
import { groupByNTotal } from '../../helpers'

import './Orders.scss'
import IconLoading from '../../assets/loading.svg'

const Orders = () => {
  const [
    {
      allOrders: { orderList, isLoading }
    },
    dispatch
  ] = useAppContext()

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  useEffect(() => {
    const getOrderList = async orders => {
      dispatch(getAllOrdersRequest())
      try {
        const res = await getAllOrders()
        dispatch(getAllOrdersSuccess(res))
      } catch (error) {
        dispatch(getAllOrdersFail(error))
      }
    }
    getOrderList()
    // getAllOrderDishes()
  }, [dispatch])

  // const sortedList = orderList.sort((a, b) =>
  //   a.dish.name.localeCompare(b.dish_name)
  // )

  // const kaka = orderList.reduce((acc, order) => {
  //   const key = order['date']
  //   acc[key] = { data: acc[key] || [] }
  //   console.log(acc[key], 'accKey')
  //   acc[key].data.push(order)
  //   console.log(acc)
  //   return acc
  // }, {})
  // console.log(kaka)
  const orderListGroupByDate = groupByNTotal(orderList, 'date')
  return (
    <div className='page'>
      <div className='order-wrapper'>
        <h1 className='order-title'>All Orders List</h1>
        {isLoading && (
          <img
            className='icon-loading'
            src={IconLoading}
            alt='loading-spinner'
          />
        )}
        {orderList.length !== 0 && (
          <div className='order-content'>
            {Object.keys(orderListGroupByDate).map(item => {
              return (
                <>
                  <div className='order-item__date-title' key={item}>
                    {item}
                  </div>
                  <div className='order-item__title'>
                    <span>Người Order</span>
                    <span>Số Lượng</span>
                    <span>Tên món</span>
                    <span>Giá</span>
                    {isAdmin && (
                      <>
                        <span className='paid'>Paid</span>
                        <span className='delete'></span>
                      </>
                    )}
                  </div>
                  {orderListGroupByDate[item].map(order => (
                    <OrderItem
                      key={order._id}
                      order={order}
                      isAdmin
                      isAllOrders
                    />
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
