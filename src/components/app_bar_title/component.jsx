import React from 'react'
import { getStyle } from './styles'

const component = ({ classes, title = '', icon = '', ...props }) => {
  return (
    <div className={classes.root}>
      <span>{title} </span>
      <span className={classes.icon}> {icon}</span>
    </div>
  )
}

export default component
