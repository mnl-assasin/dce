import React from 'react'
import Item from './item'

export default ({ classes, sessions = [] }) => {
  return (
    <div className={classes.blocWrapper}>
      <div className={classes.resultTitle}>SESSION HISTORY</div>
      {Object.keys(sessions).map(k => {
        return (
          <Item
            key={k}
            classes={classes}
            title={sessions[k].name}
            subTitle={sessions[k].result}
            time={sessions[k].time}
          />
        )
      })}
    </div>
  )
}
