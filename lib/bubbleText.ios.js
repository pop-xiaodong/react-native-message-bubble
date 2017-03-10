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
  Dimensions,
} = require('react-native');

var window = Dimensions.get('window');

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
    var {messageType, messages, imageSource, imageStyle, imageStyleLeft, imageStyleRight, style} = this.props;
    if (messageType) {
      return (
        <View style={[styles.rowRight, style]}>
          <Image
            capInsets={{top: 30, left: 13, bottom: 18, right: 13}}
            resizeMode='stretch'
            source={require('./img/message_bubble_right.png')}
            onLayout={(e) => {
              this.rightText.measure((a, b, width, height, px, py) =>{
                if (width !== viewWidth || height !== viewHight) {
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
                ref={v => this.rightText = v}
                numberOfLines={0}
                style={styles.messagesRight}>{messages}</Text>
            </Image>
          { imageSource && <Image style={[styles.userImage, {marginRight: 10, marginLeft: 3}, imageStyle, imageStyleRight]} source={imageSource}/> }
        </View>
      )
    } else {
      return (
        <View style={[styles.rowLeft, style]}>
          { imageSource && <Image style={[styles.userImage, {marginLeft: 10, marginRight: 3}, imageStyle, imageStyleLeft]} source={imageSource}/> }
          <Image
            capInsets={{top: 30, left: 13, bottom: 18, right: 13}}
            resizeMode='stretch'
            source={require('./img/message_bubble_left.png')}
            onLayout={(e) => {
              this.LeftText.measure((a, b, width, height, px, py) =>{
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

module.exports = BubbleText;
