import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '../../../common'
import { Text } from '../../../components'
import { TextStyles } from '../../../constants/style'

const component = ({ classes, amount, value }) => (
  <div className={classes.contentHolder}>
    <Row className={classes.amountHolder}>
      <Col justifyContent="center">
        <Text style={TextStyles.style2}>
          WALLET AMOUNT
        </Text>
      </Col>
      <Col justifyContent="center">
        <Text
          style={{...TextStyles.style1, fontSize: TextStyles.sizes.size4}}
          align="right"
        >
          {amount}
        </Text>
      </Col>
    </Row>
    <Row className={classes.valueHolder}>
      <Col justifyContent="center">
        <Text style={TextStyles.style2}>
          WALLET VALUE
        </Text>
      </Col>
      <Col justifyContent="center">
        <Text
          style={{...TextStyles.style1, fontSize: TextStyles.sizes.size4}} 
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
