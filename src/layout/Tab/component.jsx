import React from 'react'

import Padding from '../../layout/Padding'
import Text from '../../components/Text'
import * as styles from './styles'

class TabContainer extends React.PureComponent {
  render() {
    const { title, subTitle, children, renderButton } = this.props
    return (
      <div>
        <div style={styles.wraperStyle}>
          <div style={styles.headerContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Padding horizontal={8}>
              <Text style={styles.subTitleStyle}>{subTitle}</Text>
            </Padding>
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
