'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var id = _ref.id,
      list = _ref.list;
  return _react2.default.createElement('ul', { style: { padding: '20px' }, key: id }, list.map(function (_ref2) {
    var id = _ref2.id,
        text = _ref2.text;
    return _react2.default.createElement('li', { key: id }, text);
  }));
};