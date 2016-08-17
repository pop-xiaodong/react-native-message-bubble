# react-native-message-bubble
Chat(message) bubble UI, both ios and android.

## Demo
![image](https://github.com/pop-xiaodong/react-native-message-bubble/blob/master/example/example_ios.png)
![image](https://github.com/pop-xiaodong/react-native-message-bubble/blob/master/example/example_android.jpeg)

## Installation
install react-native-message-bubble:

```javascript
npm install react-native-message-bubble --save
```

### Android
```gradle
// file: android/settings.gradle
...

include ':react-native-message-bubble'
project(':react-native-message-bubble').projectDir = new File(settingsDir, '../node_modules/react-native-message-bubble/android')
```
```gradle
// file: android/app/build.gradle
...

dependencies {
...
compile project(':react-native-message-bubble')
}
```

```java
// file: MainActivity.java
...

import com.bubblemessage.BubbleMessagePackage;

public class MainActivity extends ReactActivity {

@Override
protected List<ReactPackage> getPackages() {
return Arrays.<ReactPackage>asList(
new MainReactPackage(),
new BubbleMessagePackage()
);
}
...
}

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
- [x] Android
- [ ] Image and audio
- [ ] CopyText
