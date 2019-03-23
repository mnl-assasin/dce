import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import FabButton from '../../components/FabButton'
import Page from '../../layout/Page'
import Padder from '../../layout/Padder'
import Tab from '../../layout/Tab'
import * as styles from './styles'

class TabContent extends React.PureComponent {
  render() {
    const { children, direction = 'row', style = {}, ...props } = this.props
    return (
      <Padder
        size={1}
        vertical
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: direction,
          ...style,
        }}
        {...props}
      >
        {children}
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

export default TabContent
