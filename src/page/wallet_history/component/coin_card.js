import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'

const formatTime = (time) => {
    return moment(time).format('LLL')
}

const getTitle = (walletAdress, transactionAdress) => {
    return walletAdress == transactionAdress ? 'SENT' :'RECEIVE'
}

const reduceAddress = (walletAdress, addressFrom, addressTo)=> {
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

// >THU FEB 28. 2019 5:56 AM<
//                  <ListItemText
 //                   primary={
  //                    '' +
    //                  moment(item.timestamp).format('LLL') +
      //                ' - ' +
        //              item.confirmations +
          //            ' - ' +
            //          item.value
              //      }
                //    secondary={item.hash}
                 // />

