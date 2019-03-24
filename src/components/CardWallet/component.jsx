import React from 'react'

import Text from '../Text'
import { convertedPricePerValue } from '../../helper/computation'
import { Padding } from '../../layout'
import * as styles from './styles'

class CardWallet extends React.PureComponent {
  render() {
    const {
      amount = 0,
      userName = '',
      componentIcon,
      basePrice = 0,
      onPress,
      param,
    } = this.props
    return (
      <Padding vertical={8}>
        <Padding
          style={styles.container}
          all={16}
          onClick={() => onPress(param)}
          button
        >
          <div style={styles.titleContainer}>
            {componentIcon}
            <Padding horizontal={4}>
              <Text style={styles.titleStyle}>
                ${convertedPricePerValue(basePrice, amount)}
              </Text>
            </Padding>
          </div>
          <Padding horizontal={1}>
            <Text style={styles.subTitleStyle}>{userName}</Text>
          </Padding>
        </Padding>
      </Padding>
    )
  }
}

export default CardWallet
