import React from 'react'
import classnames from 'classnames'

import OrderItem from './OrderItem'
import { useCheckPaidOrder } from './useCheckPaidOrder'
import moment from 'moment'

const AllOrderItem = ({ item, isAdmin, isAllOrders, type, isCheckingPaid }) => {
  const userInfo = item.orders[0].user
  const userInfoMap = { [userInfo._id]: userInfo.username }

  const { checkProviderPaidOrder, checkPaidOrderAllWeek } = useCheckPaidOrder()

  const handlePaidProvider = ({ target: { checked } }) => {
    checkProviderPaidOrder({ id: item._id, isPaid: checked })
  }

  const handlePaidAllWeek = ({ target: { checked } }) => {
    checkPaidOrderAllWeek({
      id: item._id,
      isPaidAllWeek: checked,
      userId: item.user
    })
  }
  const isDateMode = type === 'date'

  return (
    <>
      <div className='order-item__date-title' key={item._id}>
        <span>{`${
          isDateMode
            ? moment(item.createdAt).format('ddd DD MMM YYYY')
            : userInfoMap[item.user]
        }`}</span>
        <div className='paid-provider'>
          <span className='order-checkbox'>
            <input
              type='checkbox'
              onChange={isDateMode ? handlePaidProvider : handlePaidAllWeek}
              checked={item.isPaid}
              disabled={isCheckingPaid}
            />
            <span
              className={classnames('check-mask', {
                'is-disabled': isCheckingPaid
              })}
            ></span>
          </span>
        </div>
      </div>
      <div className='order-item__header'>
        <span>{`${isDateMode ? 'Người Order' : 'Ngày Order'}`}</span>
        <span>Số Lượng</span>
        <span>Tên Món</span>
        <span>Giá</span>
        {isAdmin && (
          <>
            <span className='paid'>Paid</span>
            {!isAllOrders && <span className='delete'></span>}
          </>
        )}
      </div>
      {item.orders.map(order => (
        <OrderItem
          key={order._id}
          order={order}
          isAdmin
          isAllOrders={isAllOrders}
          type={type}
          paymentId={item._id}
        />
      ))}
      <div className='order-item__total'>
        <span>TỔNG CỘNG</span>
        <span>{item.totalQty}</span>
        <span></span>
        <span className='price'>{`${item.totalPrice},000đ`}</span>
        <span></span>
      </div>
    </>
  )
}

export default AllOrderItem
