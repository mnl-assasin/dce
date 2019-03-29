import React from 'react'
import PropTypes from 'prop-types'
import { PrimaryButton } from '../../../components'
import { Padding } from '../../../layout'

const component = ({ classes, onSend, onWalletReceive, onHistory }) => (
  <Padding top={4} horizontal={20}>
    <Padding vertical={4}>
      <PrimaryButton type="primary" onClick={onSend} fullWidth>
        Send
      </PrimaryButton>
    </Padding>
    <Padding vertical={4}>
      <PrimaryButton type="primary" onClick={onWalletReceive} fullWidth>
        Receive
      </PrimaryButton>
    </Padding>
    <Padding vertical={4}>
      <PrimaryButton type="primary" fullWidth>
        Deploy
      </PrimaryButton>
    </Padding>
    <Padding vertical={4}>
      <PrimaryButton type="primary" onClick={onHistory} fullWidth>
        History
      </PrimaryButton>
    </Padding>

  </Padding>
)
// <Padding vertical={4}>
//   <PrimaryButton type="secondary" fullWidth>
//     Get Handle
//   </PrimaryButton>
// </Padding>
component.defaultProps = {}

component.propTypes = {
  onWalletReceive: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  onSend: PropTypes.func.isRequired,
  onHistory: PropTypes.func.isRequired,
}

export default component
