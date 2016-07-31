# react-native-message-bubble
Chat(message) bubble UI, for now just ios.

## Demo
![image](https://github.com/pop-xiaodong/react-native-message-bubble/blob/master/example/example.png)

## Installation
install react-native-message-bubble:

```javascript
npm install react-native-message-bubble --save
```

## Usage

```js
var BubbleText = require('react-native-message-bubble');

render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
      />
  )
},

_renderRow(rowData, sectionID, rowID) {
  var messageType = rowData.userType != 'robot';
  //messageType: if true bubble is on the right, else on left
  return (
    <BubbleText key={rowID} messages={rowData.messages} messageType={messageType}/>
  )
},
```

## Features
- Android
- Image and audio
- CopyText
