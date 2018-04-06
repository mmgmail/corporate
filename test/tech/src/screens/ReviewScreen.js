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

class ReviewScreen extends Component {
  render() {
    return (
      <Container>
        <Inner>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
        </Inner>
      </Container>
    )
  }
}

export default ReviewScreen
