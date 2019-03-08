import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline';
import Router from 'route-lite'
import { IntlProvider } from 'react-intl'
import AppContext from './services/Prividers/AppStateContext' 
import Splash from './pages/Splash/Splash'
import {
  Sidemenu,
  FullScreenLoading,
  Notifier,
  AlertDialog,
  Snackbar
} from './components'
import './App.css'

const theme = createMuiTheme({})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locale: 'en'
    }
  }
  componentDidMount() {
    //
  }

  render() {
    const { locale } = this.state

    return (
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale}>
          <AppContext>
            <div className="App">
              <Sidemenu />
              <Notifier />
              <FullScreenLoading />
              <AlertDialog />
              <Snackbar />

              <Router>
                <Splash />
              </Router>
            </div>
          </AppContext>
        </IntlProvider>
        <CssBaseline />
      </ThemeProvider>
    )
  }
}

export default App
