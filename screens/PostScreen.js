import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PostMomentForm from '../src/components/PostMomentForm'
class PostScreen extends Component {
  render () {
    return (
      <View>
        <Text>PostScreen</Text>
        <PostMomentForm />
      </View>
    )
  }
}

export default PostScreen
