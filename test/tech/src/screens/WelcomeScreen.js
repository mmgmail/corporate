import React, { Component } from 'react'
import { View, Text } from 'react-native'
import glamorous from 'glamorous-native'

const Container = glamorous(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

const Inner = glamorous(View)({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

class WelcomeScreen extends Component {
  render() {
    return (
      <Container>
        <Inner>
          <Text>WelcomeScreen</Text>
          <Text>WelcomeScreen</Text>
          <Text>WelcomeScreen</Text>
        </Inner>
      </Container>
    )
  }
}

export default WelcomeScreen
