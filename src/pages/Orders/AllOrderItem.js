import React, { useState } from 'react'
import OrderItem from './OrderItem'
import { useCheckPaidOrder } from './useCheckPaidOrder'
import { useAppContext } from '../../AppContext'

import classnames from 'classnames'

const AllOrderItem = ({ item, isAdmin, isAllOrders }) => {
  const [isPaidProvider, setPaidProvider] = useState(item.isPaid)
  const { checkProviderPaidOrder } = useCheckPaidOrder()
  const [
    {
      checkPaid: { isPaidLoading }
    }
  ] = useAppContext()

  const handlePaidProvider = ({ target: { checked } }) => {
    checkProviderPaidOrder({ id: item._id, isPaid: checked })
    setPaidProvider(checked)
  }

  return (
    <>
      <div className='order-item__date-title' key={item._id}>
        <span>{item.createdAt}</span>
        <div className='paid-provider'>
          <span className='order-checkbox'>
            <input
              type='checkbox'
              onChange={handlePaidProvider}
              checked={isPaidProvider}
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
        <OrderItem
          key={order._id}
          order={order}
          isAdmin
          isAllOrders={isAllOrders}
        />
      ))}
    </>
  )
}

export default AllOrderItem
