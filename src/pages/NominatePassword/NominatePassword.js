import React, { Component } from 'react'
import { goTo } from '../../services/navigation'
import { Page, Row, Col, Input, Button } from '../../common'
import { Navbar, alertDialog } from '../../components'
import './NominatePassword.css'

import Storage from '../../services/storage/storage'

class NominatePassword extends Component {

  constructor(props) {
    super(props)

    this.state = {
      password: '',
      confirmPassword: '',
    }
  }

  onClickSubmit() {
    const { password, confirmPassword } = this.state
    // validate passwords,
    
    if (password !== confirmPassword) {
      return alertDialog({
        title: "Alert",
        message: "Password did not match"
      })
    }
    
    // should save to storage
    // should go to dashboard
    Storage.set('is_password_set', true)
    Storage.set('password', password)

    goTo('Dashboard')
  }

  onHandlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onHandleConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  render() {
    return (
      <Page className="NominatePassword">
        <Navbar backButton={true}/>

        <div className="Content">
          <Row flex="2" alignItems="center" justifyContent="center">
            Welcome back and logo
          </Row>

          <Col flex="1">
            <Input style={{height: '20px'}} type="password" placeholder="Enter Password" onChange={this.onHandlePassword.bind(this)}/>
            <Input style={{height: '20px'}} type="password" placeholder="Enter Confirm Password" onChange={this.onHandleConfirmPassword.bind(this)}/>
            <Button onClick={this.onClickSubmit.bind(this)}> Submit </Button>
          </Col>
        </div>
      </Page>
    )
  }
}

export default NominatePassword
