import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import * as dayjs from 'dayjs'

import { useAppContext } from '../../AppContext'
import CartItem from './CartItem'
import { useSubmitOrder } from './useSubmitOrder'

import CartIcon from '../../assets/cart.svg'
import IconLoading from '../../assets/loading.svg'

import './Order.scss'

const OrderCart = () => {
  const [{ cart, submitOrder }] = useAppContext()
  const { cartList, isAnimateCart, isCartAdded } = cart
  const { isLoading } = submitOrder
  const [openCart, setOpenCart] = useState(false)
  const submitOrders = useSubmitOrder()
  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

  useEffect(() => {
    if (isCartAdded) {
      setOpenCart(isCartAdded)
    }
  }, [isCartAdded])

  const handleSubmitOrder = () => {
    const orderListParams = cartList.map(order => ({
      dishId: order.id,
      quantity: order.quantity,
      date: new Date().toDateString(),
      createdAt: dayjs().startOf('day'),
      paid: false,
      week: dayjs().week(),
      extraDish: order.extraDish,
    }))
    submitOrders(orderListParams)
  }

  return (
    <div className="cart-wrapper">
      <div
        className={classnames('cart-icon', { shake: isAnimateCart })}
        onClick={handleOpenCart}
      >
        <img src={CartIcon} alt="cart-icon" />
        <span className="cart-qty">{cartList.length}</span>
      </div>
      <div
        className={classnames('cart-content', {
          show: openCart && cartList.length,
        })}
      >
        {isLoading && <img className="cart-loading" src={IconLoading} alt="" />}
        {cartList.map(order => (
          <CartItem key={order.id} order={order} />
        ))}
        <button className="btn-order" onClick={handleSubmitOrder}>
          Order
        </button>
      </div>
    </div>
  )
}

export default OrderCart
