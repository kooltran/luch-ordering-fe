import React, { useState, useEffect } from 'react'

import { convertToLongDate } from '../../helpers'
import { useDeleteOrder } from './useDeleteOrder'
import { useCheckPaidOrder } from './useCheckPaidOrder'
import { useEditOrder } from './useEditOrder'
import { useAppContext } from '../../AppContext'

import classnames from 'classnames'

import { Modal, Button } from 'antd'

import SelectType from '../../components/SelectType/SelectType'

import RemoveIcon from '../../assets/cross.svg'
import EditIcon from '../../assets/pencil.svg'
import CheckedIcon from '../../assets/tick.svg'

const OrderItem = ({ order, isAdmin, isAllOrders, type, week }) => {
  const [{ menu, users }] = useAppContext()
  const { menuList } = menu
  const { userList } = users

  const editMenuList = menuList
    .filter(item => !item.isExtra)
    .map(menu => ({
      value: menu._id,
      label: menu.name,
    }))

  const editUserList = userList.map(item => ({
    value: item._id,
    label: item.username,
  }))

  const [isPaid, setPaid] = useState(order.paid)
  const [isEdited, setEdit] = useState(false)
  const [editedUser, setEditedUser] = useState(order.user._id)
  const [editedDish, setEditedDish] = useState(order.dish._id)
  const { checkPaidOrderItem } = useCheckPaidOrder()

  const isDateMode = type === 'date'
  const [
    {
      allOrders: { isCheckingPaid },
    },
  ] = useAppContext()

  const {
    quantity,
    dish: { name, price },
    user: { username },
    extraDish,
    date,
  } = order

  const [
    {
      orders: { deleteOrderRequest },
    },
  ] = useAppContext()

  const [isOpenModal, setOpenModal] = useState(false)
  const removeOrder = useDeleteOrder()
  const editOrder = useEditOrder()

  const handChangePaid = ({ target: { checked } }) => {
    const paramCheckPaid = {
      id: order._id,
      isPaid: checked,
      type,
      week,
    }
    checkPaidOrderItem(paramCheckPaid)
    setPaid(checked)
  }

  const handleDeleteOrder = () => {
    removeOrder(order)
  }

  const handleOpenConfirmModal = () => setOpenModal(true)

  const handleCloseConfirmModal = () => setOpenModal(false)

  const handleEditOrder = () => {
    setEdit(!isEdited)
    if (isEdited) {
      editOrder({
        orderId: order._id,
        editedDishId: editedDish,
        editedUserId: editedUser,
      })

      setEditedDish(editMenuList[0].value)
      setEditedUser(editUserList[0].value)
    }
  }

  const handleEditedUser = value => setEditedUser(value)

  const handleEditedDish = value => setEditedDish(value)

  useEffect(() => {
    setPaid(order.paid)
  }, [order.paid])

  return (
    <div key={order._id} className='order-item'>
      <span className='name'>
        {isEdited ? (
          <SelectType
            defaultValue={order.user.username}
            handleChange={handleEditedUser}
            options={editUserList}
          />
        ) : isDateMode ? (
          username
        ) : (
          date
        )}
      </span>
      <span className='quantity'>{quantity}</span>
      {
        <span className='dish-name'>
          {isEdited ? (
            <SelectType
              defaultValue={order.dish.name}
              handleChange={handleEditedDish}
              options={editMenuList}
            />
          ) : extraDish ? (
            `${extraDish} thêm`
          ) : (
            name
          )}
        </span>
      }
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
                    'is-disabled': isCheckingPaid,
                  })}
                ></span>
              </span>
            </div>
          )}
          {!isAllOrders && (
            <>
              <span className='delete' onClick={handleOpenConfirmModal}>
                <img src={RemoveIcon} alt='delete-order' />
              </span>
              <span className='edit' onClick={handleEditOrder}>
                <img
                  src={isEdited ? CheckedIcon : EditIcon}
                  alt='update-order'
                />
              </span>
            </>
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
          </Button>,
        ]}
      >
        <p>Bạn có chắc muốn xoá chứ???</p>
      </Modal>
    </div>
  )
}

export default OrderItem
