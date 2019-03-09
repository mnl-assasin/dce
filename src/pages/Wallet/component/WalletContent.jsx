import React from 'react'
import PropTypes from 'prop-types'
import { Page, Row, Col } from '../../../common'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const component = ({ classes, amount, value }) => (
  <div className={classes.contentHolder}>
    <Row className={classes.amountHolder}>
      <Col>
        <Typography variant="h5">wallet content</Typography>
      </Col>
      <Col>
        <Typography variant="h5" align="right">
          {amount}
        </Typography>
      </Col>
    </Row>
    <Row className={classes.valueHolder}>
      <Col>
        <Typography variant="h5">wallet value</Typography>
      </Col>
      <Col>
        <Typography variant="h5" gutterBottom align="right">
          {value}
        </Typography>
      </Col>
    </Row>
  </div>
)

component.defaultProps = {
  amount: '',
  value: ''
}

component.propTypes = {
  amount: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default component

export const WalletContentTestValue = {
  amount: '0.22222456',
  value: '$25'
}
