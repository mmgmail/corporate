import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import AuthScreen from './screens/AuthScreen'

export default class App extends Component {
  render() {
    const MainNavigation = TabNavigator({
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen }
    })

    return (
      <MainNavigation />
    )
  }
}
