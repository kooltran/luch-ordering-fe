import { Select } from 'antd'
import React from 'react'

const SelectType = ({ handleChange, options }) => {
  const { Option } = Select

  return (
    <Select
      defaultValue={options[0].value}
      style={{ width: 150 }}
      onChange={handleChange}
    >
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  )
}

export default SelectType
