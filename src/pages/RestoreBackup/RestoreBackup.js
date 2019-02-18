import React, { Component } from 'react';
import { goTo } from '../../services/navigation';
import { Page, Row, Col, Input, Button } from '../../common'
import { Navbar, alertDialog } from '../../components';
import { WalletRepository } from 'dapper-node';
import './RestoreBackup.css';

class RestoreBackup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phrase: ''
    }

  }

  async onClickSubmit() {
    let result = WalletRepository.restore({
      mnemonic: this.state.phrase
    })

    if (result) {
      goTo('NominatePassword', result)
    } else {
      alertDialog({
        title: 'Oopss',
        message: 'It seems like you have entered a wrong mnemonic phrase. please try again'
      })
    }
  }

  onHandlePhraseValue(e) {
    this.setState({
      phrase: e.target.value
    })
  }

  render() {
    return (
      <Page className="RestoreBackup">
        <Navbar backButton={true}/>

        <div className="Content">
          <Row flex="3" alignItems="center" justifyContent="center">
            Welcome back and logo
          </Row>

          <Col flex="1">
            <label>Enter backup phrase</label>
            <Input style={{height: '20px'}} value={this.state.phrase} onChange={this.onHandlePhraseValue.bind(this)} />
            <Button onClick={this.onClickSubmit.bind(this)}> Submit </Button>
          </Col>
        </div>
      </Page>
    );
  }
}

export default RestoreBackup;
