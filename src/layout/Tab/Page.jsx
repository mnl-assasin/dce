import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import FabButton from '../../components/FabButton'
import Page from '../../layout/Page'
import Padder from '../../layout/Padder'
import Tab from '../../layout/Tab'
import * as styles from './styles'

class TabContainer extends React.PureComponent {
  render() {
    const { title, subTitle, children, classes, renderButton } = this.props
    return (
      <div>
        <div style={styles.wraperStyle}>
          <div style={styles.headerContainer}>
            <Typography style={styles.titleStyle}>{title}</Typography>
            <Padder size={2} horizontal>
              <Typography style={styles.textStyle}>{subTitle}</Typography>
            </Padder>
          </div>
          <div style={styles.headerContainer}>{renderButton}</div>
        </div>
        {children}
      </div>
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

export default TabContainer
