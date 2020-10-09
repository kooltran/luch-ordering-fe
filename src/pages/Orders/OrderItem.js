import React, { useState, useEffect } from 'react'

import { convertToLongDate } from '../../helpers'
import { useDeleteOrder } from './useDeleteOrder'
import { useCheckPaidOrder } from './useCheckPaidOrder'
import { useAppContext } from '../../AppContext'

import classnames from 'classnames'

import { Modal, Button } from 'antd'

import RemoveIcon from '../../assets/cross.svg'

const OrderItem = ({ order, isAdmin, isAllOrders, type, week }) => {
  const [isPaid, setPaid] = useState(order.paid)
  const { checkPaidOrderItem } = useCheckPaidOrder()
  const isDateMode = type === 'date'
  const [
    {
      allOrders: { isCheckingPaid }
    }
  ] = useAppContext()

  const {
    quantity,
    dish: { name, price },
    user: { username },
    date
  } = order

  const [
    {
      orders: { deleteOrderRequest }
    }
  ] = useAppContext()
  const [isOpenModal, setOpenModal] = useState(false)
  const removeOrder = useDeleteOrder()

  const handChangePaid = ({ target: { checked } }) => {
    const paramCheckPaid = {
      id: order._id,
      isPaid: checked,
      type,
      week
    }
    checkPaidOrderItem(paramCheckPaid)
    setPaid(checked)
  }

  const handleDeleteOrder = () => {
    removeOrder(order)
  }

  const handleOpenConfirmModal = () => setOpenModal(true)

  const handleCloseConfirmModal = () => setOpenModal(false)

  useEffect(() => {
    setPaid(order.paid)
  }, [order.paid])

  return (
    <div key={order._id} className='order-item'>
      <span className='name'>{`${isDateMode ? username : date}`}</span>
      <span className='quantity'>{quantity}</span>
      {<span className='dish-name'>{name}</span>}
      {!isAllOrders && <span className='date'>{convertToLongDate(date)}</span>}
      <span className='price'>{`${
        parseInt(price.slice(0, 2)) * quantity
      },000đ`}</span>
      {isAdmin && (
        <>
          {isAllOrders && (
            <div className='paid'>
              <span className='order-checkbox'>
                <input
                  type='checkbox'
                  onChange={handChangePaid}
                  checked={isPaid || order.paid}
                  disabled={isCheckingPaid}
                />
                <span
                  className={classnames('check-mask', {
                    'is-disabled': isCheckingPaid
                  })}
                ></span>
              </span>
            </div>
          )}
          {!isAllOrders && (
            <span className='delete' onClick={handleOpenConfirmModal}>
              <img src={RemoveIcon} alt='delete-order' />
            </span>
          )}
        </>
      )}

      <Modal
        className='order-item__modal'
        visible={isOpenModal}
        onCancel={handleCloseConfirmModal}
        footer={[
          <Button size='large' key='back' onClick={handleCloseConfirmModal}>
            Đóng
          </Button>,
          <Button
            key='submit'
            size='large'
            type='primary'
            loading={deleteOrderRequest}
            onClick={handleDeleteOrder}
          >
            Xoá
          </Button>
        ]}
      >
        <p>Bạn có chắc muốn xoá chứ???</p>
      </Modal>
    </div>
  )
}

export default OrderItem
