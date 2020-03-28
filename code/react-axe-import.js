var React = require('react');
var ReactDOM = require('react-dom');

// only use react-axe in non-production environments!
if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
