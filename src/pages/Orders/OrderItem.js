import React, { useState } from 'react'

import { convertToLongDate } from '../../helpers'
import { checkPaid } from '../../api/order'
import { useDeleteOrder } from './useDeleteOrder'

import RemoveIcon from '../../assets/cross.svg'
import { useAppContext } from '../../AppContext'

const OrderItem = ({ order, isAdmin }) => {
  const [isPaid, setPaid] = useState(order.paid)
  const [{ orders }, dispatch] = useAppContext()
  const removeOrder = useDeleteOrder()

  const handChangePaid = ({ target: { checked } }) => {
    checkPaid({ id: order._id, isPaid: checked })
    setPaid(checked)
  }

  const handleDeleteOrder = () => {
    removeOrder(order)
  }

  return (
    <div key={order._id} className='order-item'>
      <span className='name'>{order.user.username}</span>
      <span className='quantity'>{order.quantity}</span>
      <span className='date'>{convertToLongDate(order.date)}</span>
      <span className='dish-name'>{order.dish.name}</span>
      <span className='price'>{order.dish.price}</span>
      {isAdmin && (
        <>
          <span className='paid'>
            <input type='checkbox' onChange={handChangePaid} checked={isPaid} />
            <span className='check-mask'></span>
          </span>
          <span className='delete' onClick={handleDeleteOrder}>
            <img src={RemoveIcon} alt='delete-order' />
          </span>
        </>
      )}
    </div>
  )
}

export default OrderItem
