import { Select } from 'antd'
import React from 'react'

const SelectType = ({ handleChange, options, defaultValue }) => {
  const { Option } = Select

  return (
    <Select defaultValue={defaultValue} onChange={handleChange}>
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  )
}

export default SelectType
