import React from 'react'
import classnames from 'classnames'

import OrderItem from './OrderItem'
import { useCheckPaidOrder } from './useCheckPaidOrder'

const AllOrderItem = ({
  item,
  isAdmin,
  isAllOrders,
  isDateMode,
  isCheckingPaid,
}) => {
  const userInfo = item.orders[0].user
  const userInfoMap = { [userInfo._id]: userInfo.username }

  const { checkProviderPaidOrder, checkPaidOrderAllWeek } = useCheckPaidOrder()

  const handlePaidProvider = ({ target: { checked } }) => {
    checkProviderPaidOrder({ id: item._id, isPaid: checked })
  }

  const handlePaidAllWeek = ({ target: { checked } }) => {
    console.log(item.user, 'userId')
    checkPaidOrderAllWeek({
      id: item._id,
      isPaidAllWeek: checked,
      userId: item.user,
    })
  }

  return (
    <>
      <div className="order-item__date-title" key={item._id}>
        <span>{`${isDateMode ? item.createdAt : userInfoMap[item.user]}`}</span>
        <div className="paid-provider">
          <span className="order-checkbox">
            <input
              type="checkbox"
              onChange={isDateMode ? handlePaidProvider : handlePaidAllWeek}
              checked={item.isPaid}
              disabled={isCheckingPaid}
            />
            <span
              className={classnames('check-mask', {
                'is-disabled': isCheckingPaid,
              })}
            ></span>
          </span>
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
          isDateMode={isDateMode}
        />
      ))}
      <div className="order-item__total">
        <span>Tổng Cộng</span>
        <span className="price">{`${item.totalPrice},000đ`}</span>
      </div>
    </>
  )
}

export default AllOrderItem
