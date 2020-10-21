import React, { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import classnames from 'classnames'

import { useAppContext } from '../../AppContext'

import {
  getAllOrdersRequest,
  getAllOrdersSuccess,
  getAllOrdersFail,
} from '../../actions/orderAction'
import SelectType from '../../components/SelectType/SelectType'
import { getPaymentByWeek } from '../../api/order'
import AllOrderItem from './AllOrderItem'

import { useCheckPaidOrder } from './useCheckPaidOrder'

import './Orders.scss'
import IconLoading from '../../assets/loading.svg'

const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)

const currentWeek = dayjs().week()

const viewTypeOptions = [
  { label: 'Date', value: 'date' },
  { label: 'User', value: 'user' },
]

const weekOptions = [
  { label: 'Current Week', value: currentWeek },
  { label: 'Last Week', value: currentWeek - 1 },
  { label: 'Last 2 Week', value: currentWeek - 2 },
]

const OrderList = () => {
  const [
    {
      allOrders: { allOrderList, isLoading, isCheckingPaid },
    },
    dispatch,
  ] = useAppContext()
  const { checkPaidOrderAllWeek } = useCheckPaidOrder()
  const [type, setType] = useState('user')
  const [week, setWeek] = useState(currentWeek)

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  const allOrderListFomatted = Object.keys(allOrderList).map(key => {
    const orders = allOrderList[key]
    const totalPrice = orders.reduce(
      (acc, order) =>
        acc + parseInt(order.dish.price.slice(0, 2)) * order.quantity,
      0
    )

    const totalQty = orders.reduce((acc, order) => acc + order.quantity, 0)

    return {
      [type]: key,
      orders,
      totalPrice,
      totalQty,
    }
  })

  const priceAllWeek = allOrderListFomatted.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  )

  const quantityAllWeek = allOrderListFomatted.reduce(
    (acc, item) => acc + item.totalQty,
    0
  )

  const getAllOrdersList = async (type, week) => {
    dispatch(getAllOrdersRequest())
    try {
      const data = await getPaymentByWeek(week)
      dispatch(getAllOrdersSuccess({ data: data, type: type }))
    } catch (error) {
      dispatch(getAllOrdersFail(error))
    }
  }

  useEffect(() => {
    getAllOrdersList('user', currentWeek)
  }, [dispatch])

  const handlePaidAllWeek = (e, item) => {
    const { checked } = e.target
    console.log(item)
    checkPaidOrderAllWeek({
      id: item.orders[0].user._id,
      isPaidAllWeek: checked,
      userId: item.user,
      week: week,
    })
  }

  const handleChangeType = value => {
    setType(value)
    getAllOrdersList(value, week)
  }

  const handleChangeWeek = week => {
    setWeek(week)
    getAllOrdersList(type, week)
  }

  return (
    <div className="page">
      <div className="order-wrapper">
        <div className="order-totalweek">
          <span>Tổng tiền</span>
          <span>{quantityAllWeek}</span>
          <div className="price">
            {`${priceAllWeek},000`}
            <sup>đ</sup>
          </div>
        </div>
        <div className="order-filter">
          <SelectType
            defaultValue="user"
            handleChange={handleChangeType}
            options={viewTypeOptions}
          />
          <SelectType
            defaultValue={currentWeek}
            handleChange={handleChangeWeek}
            options={weekOptions}
          />
        </div>
        <h1 className="order-title">All Orders List</h1>
        {isLoading && (
          <img
            className="icon-loading"
            src={IconLoading}
            alt="loading-spinner"
          />
        )}
        {allOrderListFomatted.length > 0 && (
          <div className="order-summary">
            <div className="order-summary__title">
              <span>{`${type === 'date' ? 'Ngày' : 'Tên'}`}</span>
              <span>Số Lượng</span>
              <span>Tiền</span>
              <span>Paid</span>
            </div>
            {allOrderListFomatted.map((item, idx) => {
              const isPaidAllWeek = item.orders.every(order => order.paid)
              return (
                <div
                  key={idx}
                  className={classnames('order-summary__item', {
                    paid: isPaidAllWeek,
                  })}
                >
                  <span className="name">{item.user || item.date}</span>
                  <span className="quantity">{item.totalQty}</span>
                  <span className="price">{`${item.totalPrice},000đ`}</span>
                  <span className="order-checkbox paid">
                    <input
                      type="checkbox"
                      onChange={e => handlePaidAllWeek(e, item)}
                      checked={isPaidAllWeek}
                      disabled={isCheckingPaid}
                    />
                    <span
                      className={classnames('check-mask', {
                        'is-disabled': isCheckingPaid,
                      })}
                    ></span>
                  </span>
                </div>
              )
            })}
          </div>
        )}
        {allOrderListFomatted.length > 0 &&
          allOrderListFomatted.map((item, idx) => (
            <AllOrderItem
              key={idx}
              item={item}
              isAdmin={isAdmin}
              isAllOrders={true}
              type={type}
              week={week}
            />
          ))}
      </div>
    </div>
  )
}

export default OrderList
