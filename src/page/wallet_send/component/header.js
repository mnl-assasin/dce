import React from 'react'

import { Text, Icon } from '../../../components'
import { boxShadow } from '../../../constants/style'
import { ContentCopy } from '../../../asset'
import { Page, Padding, Tab, TabContent } from '../../../layout'

export default ({ title = '', label = '' }) => (
  <Tab title="SEND">
    <TabContent direction="column">
      <div style={style.cardstyle}>
        <div>
          <Text style={style.title}>{label}</Text>
          <Text style={style.address}>{title}</Text>
        </div>
        <Icon src={ContentCopy} size={15} />
      </div>
    </TabContent>
  </Tab>
)

const style = {
  cardstyle: {
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow: boxShadow,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 16px',
  },
  title: { fontSize: 9, fontWeight: 'bold', color: 'gray' },
  address: { fontSize: 10.3, fontWeight: 'bold' },
}
