import React from 'react'
import Proptypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { boxShadowWeak } from '../../../constants/style'

const component = ({
  classes,
  userName,
  coinBase,
  coinPrice,
  networkName,
  networkNumber,
}) => (
  <div className={classes.headerHolder}>
    <div className={classes.headerProvider} style={{ padding: '10px 20px' }}>
      <Typography
        style={{
          fontSize: 10,
          color: 'black',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      >
        {networkName}
      </Typography>
      <Typography style={{ fontSize: 10, color: 'gray', fontWeight: 'bold' }}>
        {networkNumber}
      </Typography>
    </div>

    <div
      className={classes.headerCoin}
      style={{ boxShadow: boxShadowWeak, borderRadius: 20, padding: '10px 25px' }}
    >
      <Typography style={{ fontSize: 10, color: 'gray', fontWeight: 'bold' }}>
        {coinBase}
      </Typography>
      <Typography style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>
        ${coinPrice}
      </Typography>
    </div>

    <div className={classes.headerUser} style={{ padding: '10px 20px' }}>
      <Typography
        style={{
          fontSize: 10,
          color: 'black',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      >
        {userName}
      </Typography>
    </div>
  </div>
)

component.defaultProps = {
  userName: '',
  coinName: '',
  coinPrice: '',
  networkName: '',
  networkNumber: '',
}

component.propTypes = {
  userName: Proptypes.string,
  coinName: Proptypes.string,
  coinPrice: Proptypes.string,
  networkName: Proptypes.string,
  networkNumber: Proptypes.string,
  classes: Proptypes.object.isRequired,
}

export default component

export const WalletHeaderTestValue = {
  userName: '@dapperWallet',
  coinName: 'ETH',
  coinPrice: '$100',
  networkName: 'mainnet',
  networkNumber: '7116124',
}
