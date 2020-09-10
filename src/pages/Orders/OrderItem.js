import React, { useState } from 'react'

import { convertToLongDate } from '../../helpers'
import { checkPaid } from '../../api/order'
import { useDeleteOrder } from './useDeleteOrder'
import { useAppContext } from '../../AppContext'

import { Modal, Button } from 'antd'

import RemoveIcon from '../../assets/cross.svg'

const OrderItem = ({ order, isAdmin, isAllOrders }) => {
  const [isPaid, setPaid] = useState(order.paid)
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
    checkPaid({ id: order._id, isPaid: checked })
    setPaid(checked)
  }

  const handleDeleteOrder = () => {
    removeOrder(order)
  }

  const handleOpenConfirmModal = () => setOpenModal(true)

  const handleCloseConfirmModal = () => setOpenModal(false)

  return (
    <div key={order._id} className='order-item'>
      <span className='name'>{username}</span>
      <span className='quantity'>{quantity}</span>
      {!isAllOrders && <span className='dish-name'>{name}</span>}
      {!isAllOrders && <span className='date'>{convertToLongDate(date)}</span>}
      <span className='price'>{`${
        parseInt(price.slice(0, 2)) * quantity
      },000đ`}</span>
      {isAdmin && (
        <>
          <span className='paid'>
            <input type='checkbox' onChange={handChangePaid} checked={isPaid} />
            <span className='check-mask'></span>
          </span>
          <span className='delete' onClick={handleOpenConfirmModal}>
            <img src={RemoveIcon} alt='delete-order' />
          </span>
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
