import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import EmojiPanel from 'react-native-emoji-panel'
import { Button, Card, CardSection, Input, Spinner } from './common'
import { descriptionChanged, emojiChanged } from '../actions'

class PostMomentForm extends Component {
  constructor (props) {
    super(props)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      inputText: ''
    }
  }

  onDescriptionChange (descriptionText) {
    this.props.descriptionChanged(descriptionText)
  }

  // onEmojiChange (emoji) {
  //   this.props.emojiChanged(emoji)
  // }

  onButtonPress () {
    const { description, emoji } = this.props

    console.log('Creating moment...')
    // this.props.loginUser({ description, emoji })
  }

  renderError () {
    if (this.props.error) {
      return (
        <Text style={styles.errorTextStyle}>
          Submission failed!
        </Text>
      )
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Feel
      </Button>
    )
  }

  handlePick (emoji) {
    const { inputText } = this.state
    console.log('inputText: ', inputText)
    console.log('emoji: ', emoji)
    this.setState({ inputText: inputText + emoji })
  }

  render () {
    const { inputText } = this.state

    return (
      <Card>
        <CardSection>
          <Input
            label={''}
            placeholder={'what\'s going on?'}
            onChangeText={this.onDescriptionChange.bind(this)}
            value={this.props.description}
          />
        </CardSection>
        <CardSection>
          <View style={styles.containerStyle}>
            <TextInput
              style={styles.inputStyle}
              value={inputText}
              onChangeText={text => this.setState({ inputText: text })}
            />
            <EmojiPanel onPick={this.handlePick} />
          </View>
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#f00'
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  },
  inputStyle: {
    marginTop: 20,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 44
  }
}

const mapStateToProps = ({ create }) => {
  const { description, emoji, error, loading } = create

  return { description, emoji, error, loading }
}

export default connect(mapStateToProps, {
  descriptionChanged, emojiChanged // loginUser
})(PostMomentForm)
