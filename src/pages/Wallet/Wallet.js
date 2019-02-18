import React, { Component } from 'react';
import { Page, Row, Col } from '../../common'
import { Navbar } from '../../components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Wallet.scss';

class Wallet extends Component {
  
  constructor(props) {
    super(props);

    this.renderTitleComponent = this.renderTitleComponent.bind(this);
  }

  renderTitleComponent() {
    return (
      <Typography variant="h6" color="inherit" className="Navbar--title">
        { '@blocksmith' }
      </Typography>
    )
  }

  render() {
    return (
      <Page className="Wallet">
        <Navbar backButton={true} titleComponent={this.renderTitleComponent()}/>

        <div className="Content">
          <div className="Wallet--header">
            <div>
              <span> mainnet </span>
              <span> 7116142 </span>
            </div>
            
            <div>
              <h2 className="Wallet--header-title"> mainnet </h2>
              <span> $117.22 </span>
            </div>

            <div>
              <span> @blocksmith </span>
            </div>
            
          </div>

            <div className="Wallet--content">
              <Row justifyContent="center" alignItems="center">
                <Col>
                  Wallet Content
                </Col>
                <Col>
                  <h2>0.22222456</h2>
                </Col>
              </Row>
              <Row justifyContent="center" alignItems="center">
                <Col>
                  Wallet value
                </Col>
                <Col>
                  <h2>$25</h2>
                </Col>
              </Row>
            </div>

            <div className="Wallet--buttons">
              <Button variant="outlined" color="primary" className="Button" size="large">
                Send
              </Button>

              <Button variant="outlined" color="primary" className="Button" size="large">
                Receive
              </Button>

              <Button variant="outlined" color="primary" className="Button" size="large">
                Deploy
              </Button>

              <Button variant="outlined" color="primary" className="Button" size="large">
                History
              </Button>

              <Button variant="outlined" color="secondary" className="Button" size="large">
                Get Handle
              </Button>
            </div>

        </div>
      </Page>
    );
  }
}

export default Wallet;
