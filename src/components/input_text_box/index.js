import React from 'react'

import { Text, Icon } from '../../components'
import { boxShadow } from '../../constants/style'
import { ContentCopy } from '../../asset'
import { Page, Padding, Tab, TabContent } from '../../layout'

export default ({ hasIcon = false, renderIcon = null, style = {}, ...props }) => (
  <div style={{ flexDirection: 'row', position: 'relative' }}>
    <input
      type="text"
      style={{
        fontSize: 11,
        color: 'gray',
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: 2,
        borderColor: '#c1c1c1',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
        paddingRight: hasIcon ? 40 : '1rem',
      }}
      placeholder=""
      {...props}
    />
    {hasIcon ? (
      <span style={{ position: 'absolute', right: 12, top: 11 }}>
        {renderIcon}
      </span>
    ) : null}
  </div>
)
