import React, { Component } from 'react'
import { Page, Row, Col } from '../../../common'
import { Navbar } from '../../../components'
import { goBack } from '../../../services/navigation'

import Typography from '@material-ui/core/Typography'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import Button from '@material-ui/core/Button'
import QRCode from 'qrcode.react'
import './WalletReceive.scss'

class WalletReceive extends Component {
  constructor(props) {
    super(props)

    this.onClickClose = this.onClickClose.bind(this)
  }

  onClickClose() {
    goBack()
  }

  render() {
    const { wallet } = this.props
    return (
      <Page className="WalletReceive">
        <Navbar backButton={true} />

        <div className="Content">
          <Typography color="primary" variant="h4" align="center">
            Receive
          </Typography>

          <div className="WalletReceive--content">
            <Typography color="primary" variant="h6">
              your address &nbsp; <FileCopyIcon />
            </Typography>
            <Typography variant="h6">0x123123123123</Typography>
            <Typography variant="h6">@blocksmith</Typography>

            <Row>
              <Col alignItems="center">
                <QRCode value="0x123123123123" />
              </Col>
            </Row>
          </div>

          <div className="WalletReceive--button">
            <Button
              variant="outlined"
              color="primary"
              className="Button"
              size="large"
              onClick={this.onClickClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Page>
    )
  }
}

export default WalletReceive
