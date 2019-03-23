import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import FabButton from '../../components/FabButton'
import Page from '../../layout/Page'
import Padder from '../../layout/Padder'
import Tab from '../../layout/Tab'
import * as styles from './styles'

class CardWallet extends React.PureComponent {
  render() {
    const { title, subTitle, children, classes, componentIcon } = this.props
    return (
      <Padder size={2} vertical>
        <Padder style={styles.container} size={4}>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {componentIcon}
            <Padder size={1} horizontal>
              <Typography style={styles.titleStyle}>{title}</Typography>
            </Padder>
          </div>
          <Padder size={1} horizontal>
            <Typography style={styles.subTitleStyle}>{subTitle}</Typography>
          </Padder>
        </Padder>
      </Padder>
    )
  }
}
//
// const component = ({ classes, type = 'primary', ...props }) => {
//   return <Button style={styles[type]} {...props} />
// }

// component.propTypes = {
//   classes: PropTypes.object.isRequired, // withStyles
//   type: PropTypes.string.isRequired,
// }

export default CardWallet
