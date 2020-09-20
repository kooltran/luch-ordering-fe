import { Select } from 'antd'
import React from 'react'

const SelectType = ({ handleChangeType, className }) => {
  const { Option } = Select

  return (
    <Select
      defaultValue='date'
      style={{ width: 120 }}
      onChange={handleChangeType}
      className={className}
    >
      <Option value='date'>Date</Option>
      <Option value='user'>User</Option>
    </Select>
  )
}

export default SelectType
