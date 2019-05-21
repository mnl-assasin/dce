import React from 'react'

export default ({ classes, title = '', subTitle = '', time = '' }) => {
  return (
    <div className={classes.itemContainer}>
      <div className={classes.col}>
        <div className={classes.itemTitle}>{title}</div>
        <div className={classes.itemSubtitle}>{subTitle}</div>
      </div>
      <div className={classes.col}>
        <div className={classes.itemTime}>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}
