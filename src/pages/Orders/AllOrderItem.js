import React from 'react'

import OrderItem from './OrderItem'

const AllOrderItem = ({ item, isAdmin, isAllOrders, type, week }) => {
  const isDateMode = type === 'date'

  return (
    <>
      <div className='order-item__date-title' key={item._id}>
        <span>{item[type]}</span>
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
          week={week}
        />
      ))}
      <div className='order-item__total'>
        <span>Tổng Cộng</span>
        <span>{item.totalQty}</span>
        <span></span>
        <span className='price'>{`${item.totalPrice},000đ`}</span>
        <span></span>
      </div>
    </>
  )
}

export default AllOrderItem
