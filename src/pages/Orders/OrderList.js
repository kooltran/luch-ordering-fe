import React, { useEffect } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getAllOrdersRequest,
  getAllOrdersSuccess,
  getAllOrdersFail
} from '../../actions/orderAction'
import { getUsersSuccess, getUsersFail } from '../../actions/usersAction'
import { getAllOrders, getAllOrderDishes, getPayment } from '../../api/order'
import { fetchUsers } from '../../api/user'
import OrderItem from './OrderItem'
import { groupByNTotal } from '../../helpers'

import './Orders.scss'
import IconLoading from '../../assets/loading.svg'

const Orders = () => {
  const [
    {
      allOrders: { orderList, isLoading },
      users: { users }
    },
    dispatch
  ] = useAppContext()

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  useEffect(() => {
    const getOrderList = async orders => {
      dispatch(getAllOrdersRequest())
      try {
        const res = await getPayment()
        dispatch(getAllOrdersSuccess(res))
      } catch (error) {
        dispatch(getAllOrdersFail(error))
      }
    }
    const getUsers = async () => {
      try {
        const users = await fetchUsers()
        dispatch(getUsersSuccess(users))
      } catch (err) {
        dispatch(getUsersFail(err))
      }
    }
    getOrderList()
    getUsers()
  }, [dispatch])

  const findUserByName = userId =>
    users.find(user => parseInt(user._id) === parseInt(userId))

  const allOrderList = orderList.map(item => {
    const orders = item.orders.map(order => ({
      ...order,
      user: findUserByName(order._id).username
    }))
    return {
      ...item,
      orders
    }
  })
  console.log(allOrderList)
  const sortedList = orderList.sort((a, b) =>
    a.dish.name.localeCompare(b.dish_name)
  )

  // const kaka = orderList.reduce((acc, order) => {
  //   const key = order['date']
  //   if (acc[key] && acc[key].data) {
  //     acc[key].data.push(order)
  //   } else {
  //     acc[key] = { data: acc[key] || [], paidProvider: false }
  //     acc[key].data.push(order)
  //   }
  //   return acc
  // }, {})
  // console.log(kaka)
  const orderListGroupByDate = groupByNTotal(sortedList, 'date')
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
        {/* {allOrderList.length !== 0 &&
          allOrderList.map(item => (
            <>
              <div className='order-item__date-title' key={item._id}>
                {item.createdAt}
              </div>
              <div className='order-item__title'>
                <span>Người Order</span>
                <span>Số Lượng</span>
                <span>Tên Món</span>
                <span>Giá</span>
                {isAdmin && (
                  <>
                    <span className='paid'>Paid</span>
                    <span className='delete'></span>
                  </>
                )}
              </div>
              {item.orders.map(order => (
                <OrderItem key={order._id} order={order} isAdmin isAllOrders />
              ))}
            </>
          ))} */}
        {sortedList.length !== 0 && (
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
                    <span>Tên Món</span>
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
