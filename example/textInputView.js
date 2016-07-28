/**
 * react-native-message-bubble
 * https://github.com/pop-xiaodong/react-native-message-bubble
 */

'use strict';

var React = require('react');
var {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} = require('react-native');

var TextInputView = React.createClass({

  getInitialState() {
    return {
      textValue: '',
    }
  },

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          value={this.state.textValue}
          returnKeyType="send"
          blurOnSubmit={false}
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={this.sendMessage}
          onChangeText={(value) => this.setState({textValue: value})}
          />
      </View>
    )
  },

  sendMessage() {
    this.props.sendMessage(this.state.textValue, 'xiaodong');
    this.setState({textValue: ''});
  },
});

var styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#d3d3d3',
    height: 44,
    backgroundColor: '#fafafa',
  },
  textInput: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 10,
    height: 34,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d3d3d3',
    backgroundColor: 'white',
  },
});

module.exports = TextInputView;
