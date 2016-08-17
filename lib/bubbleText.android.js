/**
 * react-native-message-bubble
 * https://github.com/pop-xiaodong/react-native-message-bubble
 */

'use strict';

var React = require('react');
var {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  Dimensions,
} = require('react-native');

var window = Dimensions.get('window');
var BubbleView = require('./bubbleView');

var BubbleText = React.createClass({

  getInitialState() {
    return {
      viewHight: null,
      viewWidth: window.width/3*2,
      opacity: 0,
    }
  },

  render() {
    var {viewHight, viewWidth, opacity} = this.state;
    var {messageType, messages} = this.props;
    if (messageType) {
      return (
        <View style={styles.rowRight}>
          <View
            onLayout={(e) => {
              this.rightText.measure((a, b, width, height, px, py) =>{
                console.log(width, height, viewWidth, viewHight);
                if (width != viewWidth || height != viewHight) {
                  this.setState({
                    viewHight: height,
                    viewWidth: width,
                    opacity: 1,
                  });
                }
              });
            }}
            style={{width: viewWidth, height: viewHight, opacity: 0}}
            >
            <Text
              ref={v => this.rightText = v}
              style={styles.messagesRight}>{messages}</Text>
          </View>
          <BubbleView
            text={messages}
            type={true}
            style={{justifyContent: 'center', width: viewWidth+15, height: viewHight-5, opacity: opacity}}
            >
          </BubbleView>
          <Image style={[styles.userImage, {marginRight: 10, marginLeft: 3}]} source={require('./img/xiaodong.png')}/>
        </View>
      )
    } else {
      return (
        <View style={styles.rowLeft}>
          <Image style={[styles.userImage, {marginLeft: 10, marginRight: 3}]} source={require('./img/robot.png')}/>
          <BubbleView
            text={messages}
            type={false}
            style={{justifyContent: 'center', width: viewWidth+15, height: viewHight-5, opacity: opacity}}
            >
          </BubbleView>
          <View
            onLayout={(e) => {
              this.leftText.measure((a, b, width, height, px, py) =>{
                console.log(width, height, viewWidth, viewHight);
                if (width != viewWidth || height != viewHight) {
                  this.setState({
                    viewHight: height,
                    viewWidth: width,
                    opacity: 1,
                  });
                }
              });
            }}
            style={{width: viewWidth, height: viewHight, opacity: 0}}
            >
            <Text
              ref={v => this.leftText = v}
              style={styles.messagesLeft}>{messages}</Text>
          </View>
        </View>
      )
    }
  }
});

var styles = StyleSheet.create({
  rowRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  messagesRight: {
    alignSelf: 'flex-end',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
  messagesLeft: {
    alignSelf: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
  userImage: {
    marginTop: 2,
    height: 35,
    width: 35,
  },
});

module.exports = BubbleText;
