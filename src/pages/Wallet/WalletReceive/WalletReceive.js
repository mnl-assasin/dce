import React, { Component } from 'react';
import { Page, Row, Col } from '../../../common'
import { Navbar } from '../../../components';
import { goBack } from '../../../services/navigation';

import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy'
import Button from '@material-ui/core/Button';
import QRCode from 'qrcode.react';
import './WalletReceive.scss';

class WalletReceive extends Component {

  constructor(props) {
    super(props);

    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickClose() {
    goBack();
  }
  
  render() {
    return (
      <Page className="WalletReceive">
        <Navbar backButton={true}/>

        <div className="Content">
          <h2 className="WalletRecieve--title">
            Receive
          </h2>

          <div className="WalletReceive--content">
            <Typography color="primary">
               <h2>your address &nbsp; <FileCopyIcon/></h2>
            </Typography>
            <Typography>
              0x123123123123
            </Typography>
            <Typography>
              <h2>@blocksmith</h2>
            </Typography>

            <Row>
              <Col alignItems="center">
                <QRCode value="0x123123123123"/>
              </Col>
            </Row>
          </div>

          <div className="WalletReceive--button">
            <Button variant="outlined" color="primary" className="Button" size="large" onClick={this.onClickClose}>
              Close
            </Button>
          </div>
        </div>
      </Page>
    );
  }
}

export default WalletReceive;
