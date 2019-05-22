import React from 'react'
import Item from './item'
import { DappViewMaximumSessionCount } from '../../../constants/display'

export default ({ classes, sessions = [] }) => {
  return (
    <div className={classes.blocWrapper}>
      <div className={classes.resultTitle}>SESSION HISTORY</div>
      {Object.keys(sessions.slice(0, DappViewMaximumSessionCount)).map(k => {
        return (
          <Item
            key={k}
            classes={classes}
            title={sessions[k].name}
            subTitle={sessions[k].data}
            time={sessions[k].time}
          />
        )
      })}
    </div>
  )
}
