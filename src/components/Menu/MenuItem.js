import React, { useState } from 'react'
import classnames from 'classnames'

import { useAppContext } from '../../AppContext'
import IconPlus from '../../assets/plus.svg'
import { addCartItem, removeCartAddedFlag } from '../../actions/cartAction'
import SelectType from '../SelectType/SelectType'

import { REDIRECT_URL } from '../../constants'

const MenuItem = ({ item }) => {
  const [quantity, setQty] = useState(1)
  const [{ users, cart, orderTimeout, menu }, dispatch] = useAppContext()

  const extraDishes = menu.menuList
    .filter(dish => !dish.isExtra)
    .map(item => ({ label: item.name, value: item.name }))

  const [extraDish, setExtraDish] = useState(extraDishes[0].value)
  const { user } = users
  const { cartList } = cart

  const handleAddTocart = () => {
    const formattedCartItem = {
      id: item._id,
      dish_name: item.isExtra ? `${extraDish} thêm` : item.name,
      quantity,
      extraDish: item.isExtra ? extraDish : null,
    }

    if (user.username) {
      if (cartList.length === 0) {
        dispatch(addCartItem(cartList))
        setTimeout(() => dispatch(removeCartAddedFlag()), 500)
        cartList.push(formattedCartItem)
      } else {
        const cartAdded = [...cartList, formattedCartItem]
        dispatch(addCartItem(cartAdded))
        setTimeout(() => dispatch(removeCartAddedFlag()), 500)
      }
    } else {
      window.open(REDIRECT_URL, '_self')
    }
  }

  const handleChangeQuantity = ({ target: { value } }) => {
    const quantity = parseInt(value)
    if (quantity <= 0) {
      setQty(1)
    } else if (quantity > 5) {
      setQty(5)
    } else {
      setQty(quantity)
    }
  }

  const handleChangeExtraDish = value => {
    setExtraDish(value)
  }

  return (
    <div
      className={classnames('menu-item', {
        'is-disabled':
          cartList.some(cart => cart.id === item._id) ||
          orderTimeout.isOrderTimeout,
        'extra-dish': item.isExtra,
      })}
    >
      {!item.isExtra ? (
        <div className="image">
          <img className="img-dish" src={item.img} alt={item.name} />
          <div onClick={handleAddTocart}>
            <img className="icon-add" src={IconPlus} alt="" />
          </div>
        </div>
      ) : (
        <div className="dish-type">
          <SelectType
            defaultValue={extraDishes[0].label}
            handleChange={handleChangeExtraDish}
            options={extraDishes}
          />

          <div onClick={handleAddTocart}>
            <img className="icon-add" src={IconPlus} alt="" />
          </div>
        </div>
      )}

      <div className="desc">
        <div className="info">
          <span className="name">{item.name}</span>
          <span className="price">{item.price}</span>
        </div>
        <div className="quantity">
          <input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuItem
