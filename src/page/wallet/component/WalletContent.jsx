import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '../../../common'
import { Text } from '../../../components'

const component = ({ classes, amount, value }) => (
  <div className={classes.contentHolder}>
    <Row className={classes.amountHolder}>
      <Col>
        <Text variant="h6">wallet amount</Text>
      </Col>
      <Col>
        <Text variant="h6" align="right">
          {amount}
        </Text>
      </Col>
    </Row>
    <Row className={classes.valueHolder}>
      <Col>
        <Text variant="h6">wallet value</Text>
      </Col>
      <Col>
        <Text variant="h6" gutterBottom align="right">
          ${value}
        </Text>
      </Col>
    </Row>
  </div>
)

component.defaultProps = {
  amount: '',
  value: '',
}

component.propTypes = {
  amount: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

export default component

export const WalletContentTestValue = {
  amount: '0.22222456',
  value: '$25',
}
