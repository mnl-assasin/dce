import React from 'react'
import FabButton from '../../components/FabButton'
import Page from '../../layout/Page'
import Padding from '../../layout/Padding'
import Tab from '../../layout/Tab'
import * as styles from './styles'

class TabContent extends React.PureComponent {
  render() {
    const { children, direction = 'row', style = {}, ...props } = this.props
    return (
      <Padding
        vertical={4}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: direction,
          ...style,
        }}
        {...props}
      >
        {children}
      </Padding>
    )
  }
}

export default TabContent
