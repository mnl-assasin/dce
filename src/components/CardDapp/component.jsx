import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import FabButton from '../../components/FabButton'
import Page from '../../layout/Page'
import Padder from '../../layout/Padder'
import Tab from '../../layout/Tab'
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
        <Padder
          size={2}
          horizontal
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <Padder style={styles.container(isActive)} size={4} vertical>
            {componentIcon}
            <Padder size={1} horizontal>
              <Typography
                style={{
                  fontSize: 10,
                  fontWeight: 'bolder',
                  paddingTop: 15,
                  textTransform: textTransform,
                  color: isActive ? 'white' : 'black',
                }}
              >
                {title}
              </Typography>
            </Padder>
          </Padder>
        </Padder>
      )
    }
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

export default CardDapp
