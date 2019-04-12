import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'

const formatTime = (time) => {
    return moment(time).format('LLL')
}

const getTitle = (walletAdress, transactionAdress) => {
    console.log(walletAdress, transactionAdress)
    return walletAdress == transactionAdress ? 'SENT' :'RECEIVE'
}

const reduceAddress = (address)=> {
  const addressAr = address.split('')
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
          <span className={classes.address}>{reduceAddress(item.from)}</span>
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

