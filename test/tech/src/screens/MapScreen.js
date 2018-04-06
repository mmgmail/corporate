import React, { Component } from 'react'
import { View, Text } from 'react-native'
import glamorous from 'glamorous-native'

const Container = glamorous(View)({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

const Inner = glamorous(View)({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

class MapScreen extends Component {
  render() {
    return (
      <Container>
        <Inner>
          <Text>MapScreen</Text>
          <Text>MapScreen</Text>
          <Text>MapScreen</Text>
        </Inner>
      </Container>
    )
  }
}

export default MapScreen
