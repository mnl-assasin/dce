import React, { Component } from 'react';
import { Page } from '../../common'
import { Navbar } from '../../components';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <Page className="Dashboard">
        <Navbar/>
        <div className="Content">
            Dashboard Page
        </div>
      </Page>
    );
  }
}

export default Dashboard;
