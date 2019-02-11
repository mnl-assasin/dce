import React, { Component } from 'react';
import Router from 'route-lite';
import {IntlProvider} from 'react-intl';
import { Sidemenu, FullScreenLoading, Notifier, AlertDialog } from './components'
import Splash  from './pages/Splash/Splash'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locale: 'en',
    };
  }
  componentDidMount() {
    // 
  }

  render() {
    const { locale } = this.state

    return (
      <IntlProvider locale={locale}>
        <div className="App">
          <Sidemenu/>
          <Notifier/>
          <FullScreenLoading/>
          <AlertDialog/>

          <Router>
            <Splash/>
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
