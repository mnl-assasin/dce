import React from 'react'
import en from 'javascript-time-ago/locale/en'
import TimeAgo from 'javascript-time-ago'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const formatTime = time => {
  return timeAgo.format(time )
}

export default ({ classes, title = '', subTitle = '', time = '' }) => {
  return (
    <div className={classes.itemContainer}>
      <div className={classes.col}>
        <div className={classes.itemTitle}>{title}</div>
        <div className={classes.itemSubtitle}>{subTitle.slice(0, 40)}</div>
      </div>
      <div className={classes.col}>
        <div className={classes.itemTime}>
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </div>
  )
}
