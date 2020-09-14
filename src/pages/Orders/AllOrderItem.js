import React, { useState } from 'react'
import OrderItem from './OrderItem'
import { useCheckPaidOrder } from './useCheckPaidOrder'
import { useAppContext } from '../../AppContext'

import classnames from 'classnames'

const AllOrderItem = ({ item, isAdmin, isAllOrders, isDateMode }) => {
  const [isPaid, setPaid] = useState(item.isPaid)
  const { checkProviderPaidOrder, checkPaidOrderAllWeek } = useCheckPaidOrder()
  const [
    {
      checkPaid: { isPaidLoading }
    }
  ] = useAppContext()

  const handlePaidProvider = ({ target: { checked } }) => {
    checkProviderPaidOrder({ id: item._id, isPaid: checked })
    setPaid(checked)
  }

  const handlePaidAllWeek = ({ target: { checked } }) => {
    console.log(checked)
    checkPaidOrderAllWeek({ id: item._id, isPaidAllWeek: checked })
    setPaid(checked)
  }

  return (
    <>
      <div className='order-item__date-title' key={item._id}>
        <span>{`${isDateMode ? item.createdAt : item.user}`}</span>
        <div className='paid-provider'>
          <span className='order-checkbox'>
            <input
              type='checkbox'
              onChange={isDateMode ? handlePaidProvider : handlePaidAllWeek}
              checked={isPaid}
              disabled={isPaidLoading}
            />
            <span
              className={classnames('check-mask', {
                'is-disabled': isPaidLoading
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
            <span className='delete'></span>
          </>
        )}
      </div>
      {item.orders.map(order => (
        <OrderItem
          key={order._id}
          order={order}
          isAdmin
          isAllOrders={isAllOrders}
          isDateMode={isDateMode}
        />
      ))}
      <div className='order-item__total'>
        <span>Tổng Cộng</span>
        <span className='price'>{`${item.totalPrice},000đ`}</span>
      </div>
    </>
  )
}

export default AllOrderItem
