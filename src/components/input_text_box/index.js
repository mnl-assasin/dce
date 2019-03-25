import React from 'react'

import { Text, Icon } from '../../components'
import { boxShadow } from '../../constants/style'
import { ContentCopy } from '../../asset'
import { Page, Padding, Tab, TabContent } from '../../layout'

export default props => (
  <div style={{ flexDirection: 'row', position: 'relative' }}>
    <input
      type="text"
      style={{
        fontSize: 11,
        color: 'gray',
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 3,
        borderColor: '#c1c1c1',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
        paddingRight: 40,
      }}
      placeholder="Send To"
    />
    <span style={{ position: 'absolute', right: 8, top: 7 }}>
      <Icon iconName="file_copy" size={20} />
    </span>
  </div>
)
