import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Router from 'route-lite'
import { IntlProvider } from 'react-intl'
import Splash from './pages/Splash/Splash'
import {
  Sidemenu,
  FullScreenLoading,
  Notifier,
  AlertDialog
} from './components'
import './App.css'

const theme = {}

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
          <div className="App">
            <Sidemenu />
            <Notifier />
            <FullScreenLoading />
            <AlertDialog />

            <Router>
              <Splash />
            </Router>
          </div>
        </IntlProvider>
      </ThemeProvider>
    )
  }
}

export default App
