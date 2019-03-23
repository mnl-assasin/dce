import React from 'react'
import { Padding } from '../../layout'

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
