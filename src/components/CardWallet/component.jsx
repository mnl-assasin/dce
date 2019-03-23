import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import FabButton from '../../components/FabButton'
import Text from '../Text'
import Page from '../../layout/Page'
import Padding from '../../layout/Padding'
import Tab from '../../layout/Tab'
import * as styles from './styles'

class CardWallet extends React.PureComponent {
  render() {
    const { title, subTitle, children, classes, componentIcon } = this.props
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
