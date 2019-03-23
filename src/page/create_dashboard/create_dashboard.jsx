import React, { Component } from 'react';
import { Page } from '../../common'
import { Navbar } from '../../components';
import './CreateDashboard.css';

class CreateDashboard extends Component {

  render() {
    return (
      <Page className="CreateDashboard">
        <Navbar/>
        <div className="Content">
          CreateDashboard Page
        </div>
      </Page>
    );
  }
}

export default CreateDashboard;
