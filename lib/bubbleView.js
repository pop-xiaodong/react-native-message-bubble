/**
 *BubbleView.js
 */
'use strict';
var React = require('react');
var PropTypes = require('prop-types');
var {
 View,
 requireNativeComponent,
} = require('react-native');
var createReactClass = require('create-react-class');

var BubbleTextView = requireNativeComponent('BubbleView', BubbleView);

var BubbleView = createReactClass({

  propTypes: {
    ...View.propTypes,
    text: PropTypes.string,
    type: PropTypes.bool,
  },

  render() {
    return (
      <BubbleTextView {...this.props}/>
    );
  },
});

module.exports = BubbleView;
