import React, { useState, useEffect, useContext } from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import moment from 'moment'

TimeAgo.addLocale(en)
const timeAgo =new TimeAgo('en-US')

const formatTime = (time) => {
  return timeAgo.format(time * 1000)
}

const getTitle = (walletAdress, transactionAdress) => {
  return walletAdress == transactionAdress ? 'SENT' : 'RECEIVE'
}

const reduceAddress = (walletAdress, addressFrom, addressTo) => {
  if (walletAdress === addressFrom) {
    // sent coin
    if(!addressTo) {
      return null
    }
    const addressAr = addressTo.split('')
    return addressAr.slice(0, 6).join('') + '...' + addressAr.slice(-7).join('')
  }

  // receive
  const addressAr = addressFrom.split('')
  return addressAr.slice(0, 6).join('') + '...' + addressAr.slice(-7).join('')
}

export default  ({classes, item, address}) => {
  console.log(item)
  return (
    <div className={classes.coinCard}>
        <div className={classes.coinTitleContainer}>
          <span className={classes.coinTitleHeader}>{getTitle(address, item.from)}</span>
          <span className={classes.coinTileValue}>{item.value} ETH</span>
        </div>
        <div className={classes.cardContentHolder}>
          <span className={classes.address}>{reduceAddress(address, item.from, item.to)}</span>
          <span className={classes.date}>{formatTime(item.timestamp)}</span>
        </div>
      </div>
 )
}


