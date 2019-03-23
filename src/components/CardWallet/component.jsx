import React from 'react'

import Text from '../Text'
import { Padding } from '../../layout'
import * as styles from './styles'

class CardWallet extends React.PureComponent {
  render() {
    const { title, subTitle, componentIcon } = this.props
    return (
      <Padding vertical={8}>
        <Padding style={styles.container} all={16}>
          <div style={styles.titleContainer}>
            {componentIcon}
            <Padding horizontal={4}>
              <Text style={styles.titleStyle}>{title}</Text>
            </Padding>
          </div>
          <Padding horizontal={1}>
            <Text style={styles.subTitleStyle}>{subTitle}</Text>
          </Padding>
        </Padding>
      </Padding>
    )
  }
}

export default CardWallet
