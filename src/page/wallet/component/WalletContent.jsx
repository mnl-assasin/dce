import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '../../../common'
import { Text } from '../../../components'

const component = ({ classes, amount, value }) => (
  <div className={classes.contentHolder}>
    <Row className={classes.amountHolder}>
      <Col justifyContent="center">
        <Text style={{ fontWeight: 'bold', fontSize: 10, color: 'gray' }}>
          WALLET AMOUNT
        </Text>
      </Col>
      <Col justifyContent="center">
        <Text
          style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
          align="right"
        >
          {amount}
        </Text>
      </Col>
    </Row>
    <Row className={classes.valueHolder}>
      <Col justifyContent="center">
        <Text style={{ fontWeight: 'bold', fontSize: 10, color: 'gray' }}>
          WALLET VALUE
        </Text>
      </Col>
      <Col justifyContent="center">
        <Text
          style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
          align="right"
        >
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
