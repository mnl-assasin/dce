import React from 'react'
import Item from './item'

export default ({ classes, name = '', result = '', time='' }) => {
  return (
    <div className={classes.blocWrapper}>
      <div className={classes.resultTitle}>RESULTS</div>
      <Item classes={classes} title={name} subTitle={result}  time={time}/>
    </div>
  )
}
