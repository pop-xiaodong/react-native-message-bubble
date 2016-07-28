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
} = require('react-native');

var IMCell = React.createClass({

  getInitialState() {
    return {
      viewHight: null,
      viewWidth: 320/5*4,
      opacity: 0,
    }
  },

  render() {
    var {viewHight, viewWidth, opacity} = this.state;
    var {messageType, messages} = this.props;
    if (messageType) {
      return (
        <View style={styles.rowRight}>
          <Image
            capInsets={{top: 30, left: 13, bottom: 18, right: 13}}
            resizeMode='stretch'
            source={require('./message_bubble_right.png')}
            onLayout={(e) => {
              this.rightText.measure((a, b, width, height, px, py) =>{
                if (width != viewWidth || height != viewHight) {
                  console.log('---' + a, b, width, height, px, py);
                  this.setState({
                    viewHight: height,
                    viewWidth: width,
                    opacity: 1,
                  });
                }
              });
            }}
            style={{justifyContent: 'center', width: viewWidth, height: viewHight, opacity: opacity}}
            >
              <Text
                lineBreakMode='clip'
                ref={v => this.rightText = v}
                numberOfLines={0}
                style={styles.messagesRight}>{messages}</Text>
            </Image>
          <Image style={[styles.userImage, {marginRight: 10, marginLeft: 3}]} source={require('./xiaodong.png')}/>
        </View>
      )
    } else {
      return (
        <View style={styles.rowLeft}>
          <Image style={[styles.userImage, {marginLeft: 10, marginRight: 3}]} source={require('./robot.png')}/>
          <Image
            capInsets={{top: 30, left: 13, bottom: 18, right: 13}}
            resizeMode='stretch'
            source={require('./message_bubble_left.png')}
            onLayout={(e) => {
              this.LeftText.measure((a, b, width, height, px, py) =>{
                // console.log(a, b, width, height, px, py);
                this.setState({
                  viewHight: height,
                  viewWidth: width,
                  opacity: 1,
                });
              });
            }}
            style={{justifyContent: 'center', width: viewWidth, height: viewHight, opacity: opacity}}
            >
              <Text
                lineBreakMode='clip'
                ref={v => this.LeftText = v}
                numberOfLines={0}
                style={styles.messagesLeft}>{messages}</Text>
            </Image>
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
    fontSize: 16,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: 'transparent',
  },
  messagesLeft: {
    alignSelf: 'flex-start',
    fontSize: 16,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: 'transparent',
  },
  userImage: {
    marginTop: 2,
    height: 35,
    width: 35,
  },
});

module.exports = IMCell;
