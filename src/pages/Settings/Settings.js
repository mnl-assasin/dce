import React, { Component } from 'react';
import { Page } from '../../common'
import { Navbar } from '../../components';
import './Settings.css';

class Settings extends Component {

  render() {
    return (
      <Page className="Settings">
        <Navbar/>
        <div className="Content">
          Settings Page
        </div>
      </Page>
    );
  }
}

export default Settings;