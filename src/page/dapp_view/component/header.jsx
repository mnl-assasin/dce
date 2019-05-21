import React from 'react'

export default ({ classes, name = '', provider = '' }) => {
  return (
    <div className="headerContainer">
      <div className={classes.subTitle}>{provider.toUpperCase()}</div>
      <div className={classes.title}>{name}</div>
    </div>
  )
}
