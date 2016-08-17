/**
 * react-native-message-bubble
 * https://github.com/pop-xiaodong/react-native-message-bubble
 */

var React = require('react');
var {
  StyleSheet,
  View,
  Image,
  Text,
  AppRegistry,
  Keyboard,
  ListView,
} = require('react-native');

var InvertibleScrollView = require('react-native-invertible-scroll-view');
var BubbleText = require('react-native-message-bubble');
var TextInputView = require('./textInputView');

var Example = React.createClass({

  getInitialState() {
    var messages = [
      {
        messages: '你好~',
        userType: 'robot',
      }
    ];
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var rowID = messages.map((value, index) => index).reverse();
    return {
      dataValue: messages,
      dataSource: ds.cloneWithRows(messages, rowID),
      textInputPosition: 0,
    };
  },

  componentDidMount() {
    this._listeners = [
      Keyboard.addListener('keyboardWillShow', this.onKeyboardWillShow),
      Keyboard.addListener('keyboardWillHide', this.onKeyboardWillHide),
    ];
    setTimeout(() => {
      this.sendMessage('Can I help you?', 'robot');
    }, 2000);
  },

  componentWillUnmount(){
    this._listeners.map((f) => f.remove());
    this._listeners = undefined;
  },

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
          enableEmptySections={true}
          pageSize={8}
          initialListSize={8}
          keyboardDismissMode='on-drag'
          />
        <View style={{marginBottom: this.state.textInputPosition}}>
          <TextInputView sendMessage={(textValue, userType) => this.sendMessage(textValue, userType)} />
        </View>
      </View>
    )
  },

  _renderRow(rowData, sectionID, rowID) {
    var messageType = rowData.userType != 'robot';
    return (
      <BubbleText key={rowID} messages={rowData.messages} messageType={messageType}/>
    )
  },

  sendMessage(textValue, userType) {
    var {dataValue, dataSource} = this.state;
    if (!textValue) {
      textValue=' ';
    }
    var value = {
      messages: textValue,
      userType: userType,
    };
    dataValue.push(value);
    var rowID = dataValue.map((value, index) => index).reverse();
    this.setState({
      dataValue: dataValue,
      dataSource: this.state.dataSource.cloneWithRows(dataValue, rowID),
    });
    if (userType != 'robot') {
      setTimeout(() => {
        this.sendMessage('Confirm', 'robot');
      }, 2000);
    }
  },

  onKeyboardWillShow(ev) {
    if (ev.endCoordinates) {
      this.setState({textInputPosition: ev.endCoordinates.height});
    }
  },

  onKeyboardWillHide(ev) {
    if (ev.startCoordinates) {
      this.setState({textInputPosition: 0});
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
  },
  listView: {
    flex:1,
    marginTop: 20,
  },
  bottomView: {
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
  sendText: {
    alignSelf: 'center',
    marginRight: 10,
  }
});

AppRegistry.registerComponent('example', () => Example);
