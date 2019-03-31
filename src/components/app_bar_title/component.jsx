import React from 'react'
import { getStyle } from './styles'

const component = ({ classes, title = '', icon = '', ...props }) => {
  return (
    <div>
      <span>{title}</span>
      {icon}
    </div>
  )
}

export default component
