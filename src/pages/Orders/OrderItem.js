import React from 'react'

import { convertToLongDate } from '../../helpers'

const OrderItem = ({ order, isAdmin }) => {
  return (
    <div key={order._id} className="order-item">
      <span className="name">{order.name}</span>
      <span className="quantity">{order.quantity}</span>
      <span className="date">{convertToLongDate(order.date)}</span>
      <span className="dish-name">{order.dish_name}</span>
      <span className="price">{`${order.price}.000đ`}</span>
      {isAdmin && (
        <span className="paid">
          <input type="checkbox" />
          <span className="check-mask"></span>
        </span>
      )}
    </div>
  )
}

export default OrderItem
