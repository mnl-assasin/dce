import React, { Component, useContext } from 'react'
import Proptypes from 'prop-types'

// constants
export const IS_LOOGED = 'isLogged'

export const defaultAppContext = {}

export const AppContextObject = React.createContext(defaultAppContext)

class AppContextProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      [IS_LOOGED]: true,
      userToken: null,
      ...props.value,

      onAppContextChange: this.onAppContextChange
    }
  }

  onAppContextChange = item => {
    this.setState({
      ...this.state,
      ...item
    })
  }

  render() {
    return (
      <AppContextObject.Provider value={this.state}>
        {this.props.children}
      </AppContextObject.Provider>
    )
  }
}

AppContextProvider.defaultProps = {
  value: {}
}

AppContextProvider.propTypes = {
  value: Proptypes.object
}

export default AppContextProvider

export const withAppContext = WrappedComponent => props => {
  const AppContext = useContext(AppContextObject)
  return <WrappedComponent {...props} AppContext={AppContext} />
}
