import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import FabButton from '../../components/FabButton'
import Page from '../../layout/Page'
import Padding from '../../layout/Padding'
import Tab from '../../layout/Tab'
import Text from '../Text'
import * as styles from './styles'

class CardDapp extends React.PureComponent {
  render() {
    const {
      title,
      textTransform = 'none',
      children,
      classes,
      componentIcon,
      isActive,
    } = this.props
    {
      return (
        <Padding
          horizontal={8}
          style={{ display: 'flex', flexDirection: 'row' }}
        >
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
}

export default CardDapp
