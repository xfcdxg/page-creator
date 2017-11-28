'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    className: 'jsx-1449577511'
  }, _react2.default.createElement('div', {
    className: 'jsx-1449577511' + ' ' + 'link-container'
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    className: 'jsx-1449577511'
  }, 'Index')), _react2.default.createElement(_link2.default, { as: '/page/1', href: '/?id=1' }, _react2.default.createElement('a', {
    className: 'jsx-1449577511'
  }, 'Page1')), _react2.default.createElement(_link2.default, { as: '/page/2', href: '/?id=2' }, _react2.default.createElement('a', {
    className: 'jsx-1449577511'
  }, 'Page2'))), _react2.default.createElement('div', {
    className: 'jsx-1449577511'
  }, children), _react2.default.createElement(_style2.default, {
    styleId: '1449577511',
    css: ['a.jsx-1449577511{color:blue;margin-right:10px;}', '.link-container.jsx-1449577511{margin-bottom:20px;}']
  }));
};