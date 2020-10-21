import React from 'react'
import SelectType from '../SelectType/SelectType'

const MenuItemExtra = () => {
  const handleChangeQuantity = () => {}
  return (
    <div className="menu-item extra">
      <h4>Món Thêm</h4>
      <div className="menu-item__type">
        <div className="title">Tên Món</div>
        <SelectType defaultValue={[]} handleChange={() => {}} options={[]} />
      </div>
      <div className="quantity">
        <div className="title">Số Lượng</div>
        <input type="number" value={1} onChange={handleChangeQuantity} />
      </div>
    </div>
  )
}

export default MenuItemExtra
