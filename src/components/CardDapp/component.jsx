import React from 'react'

import { Padding } from '../../layout'
import Text from '../Text'
import * as styles from './styles'

class CardDapp extends React.PureComponent {
  render() {
    const {
      title,
      textTransform = 'none',
      componentIcon,
      isActive,
    } = this.props

    return (
      <Padding horizontal={8} style={{ display: 'flex', flexDirection: 'row' }}>
        <Padding style={styles.container(isActive)} vertical={16}>
          {componentIcon}
          <Padding horizontal={4}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bolder',
                paddingTop: 15,
                textTransform: textTransform,
                color: isActive ? 'white' : 'black',
              }}
            >
              {title}
            </Text>
          </Padding>
        </Padding>
      </Padding>
    )
  }
}

export default CardDapp
