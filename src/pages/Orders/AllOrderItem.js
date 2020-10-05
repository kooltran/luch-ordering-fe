import React from 'react'
import classnames from 'classnames'

import OrderItem from './OrderItem'
import { useCheckPaidOrder } from './useCheckPaidOrder'

const AllOrderItem = ({
  item,
  isAdmin,
  isAllOrders,
  type,
  isCheckingPaid,
  week,
}) => {
  const { checkPaidOrderAllWeek } = useCheckPaidOrder()
  const isPaidAllWeek = item.orders.every(order => order.paid)

  const handlePaidAllWeek = ({ target: { checked } }) => {
    checkPaidOrderAllWeek({
      id: item.orders[0].user._id,
      isPaidAllWeek: checked,
      userId: item.user,
      week: week,
    })
  }
  const isDateMode = type === 'date'

  return (
    <>
      <div className="order-item__date-title" key={item._id}>
        <span>{item[type]}</span>
        <div className="paid-provider">
          {!isDateMode && (
            <span className="order-checkbox">
              <input
                type="checkbox"
                onChange={handlePaidAllWeek}
                checked={isPaidAllWeek}
                disabled={isCheckingPaid}
              />
              <span
                className={classnames('check-mask', {
                  'is-disabled': isCheckingPaid,
                })}
              ></span>
            </span>
          )}
        </div>
      </div>
      <div className="order-item__header">
        <span>{`${isDateMode ? 'Người Order' : 'Ngày Order'}`}</span>
        <span>Số Lượng</span>
        <span>Tên Món</span>
        <span>Giá</span>
        {isAdmin && (
          <>
            <span className="paid">Paid</span>
            {!isAllOrders && <span className="delete"></span>}
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
      <div className="order-item__total">
        <span>Tổng Cộng</span>
        <span>{item.totalQty}</span>
        <span></span>
        <span className="price">{`${item.totalPrice},000đ`}</span>
        <span></span>
      </div>
    </>
  )
}

export default AllOrderItem
