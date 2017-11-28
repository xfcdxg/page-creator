'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _get2 = require('mulan-lib/lib/get');

var _get3 = _interopRequireDefault(_get2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dynamic = require('next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requireComponent = function requireComponent(_ref) {
  var component = _ref.component,
      props = _ref.props;

  switch (component) {
    case 'title':
      var Title = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
        eval('require.ensure = function (deps, callback) { callback(require) }');

        require.ensure([], function (require) {
          var m = require('../components/title');

          m.__webpackChunkName = 'components_title_fdc5baec84b4b38e4efa0d1f06567d5c.js';
          resolve(m);
        }, 'chunks/components_title_fdc5baec84b4b38e4efa0d1f06567d5c.js');
      }) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
        var weakId = require.resolveWeak('../components/title');

        try {
          var weakModule = __webpack_require__(weakId);

          return resolve(weakModule);
        } catch (err) {}

        require.ensure([], function (require) {
          try {
            var m = require('../components/title');

            resolve(m);
          } catch (error) {
            reject(error);
          }
        }, 'chunks/components_title_fdc5baec84b4b38e4efa0d1f06567d5c.js');
      }));
      return _react2.default.createElement(Title, (0, _extends3.default)({}, props, { key: props.id || '' }));

    case 'content':
      var Content = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
        eval('require.ensure = function (deps, callback) { callback(require) }');

        require.ensure([], function (require) {
          var m = require('../components/content');

          m.__webpackChunkName = 'components_content_b495cfe6e4ec57ba8fa1132d8f39350b.js';
          resolve(m);
        }, 'chunks/components_content_b495cfe6e4ec57ba8fa1132d8f39350b.js');
      }) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
        var weakId = require.resolveWeak('../components/content');

        try {
          var weakModule = __webpack_require__(weakId);

          return resolve(weakModule);
        } catch (err) {}

        require.ensure([], function (require) {
          try {
            var m = require('../components/content');

            resolve(m);
          } catch (error) {
            reject(error);
          }
        }, 'chunks/components_content_b495cfe6e4ec57ba8fa1132d8f39350b.js');
      }));
      return _react2.default.createElement(Content, (0, _extends3.default)({}, props, { key: props.id || '' }));

    case 'list':
      var List = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
        eval('require.ensure = function (deps, callback) { callback(require) }');

        require.ensure([], function (require) {
          var m = require('../components/list');

          m.__webpackChunkName = 'components_list_159463682d1f400132487130b79efdcc.js';
          resolve(m);
        }, 'chunks/components_list_159463682d1f400132487130b79efdcc.js');
      }) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
        var weakId = require.resolveWeak('../components/list');

        try {
          var weakModule = __webpack_require__(weakId);

          return resolve(weakModule);
        } catch (err) {}

        require.ensure([], function (require) {
          try {
            var m = require('../components/list');

            resolve(m);
          } catch (error) {
            reject(error);
          }
        }, 'chunks/components_list_159463682d1f400132487130b79efdcc.js');
      }));
      return _react2.default.createElement(List, (0, _extends3.default)({}, props, { key: props.id || '' }));

    default:
      break;
  }
};

var App = function App(_ref2) {
  var config = _ref2.config;

  return _react2.default.createElement(_layout2.default, null, config.map(function (module) {
    return requireComponent(module);
  }));
};

App.getInitialProps = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref3) {
    var req = _ref3.req,
        query = _ref3.query;
    var id;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(query);
            id = query.id;
            _context.next = 4;
            return (0, _get3.default)('http://localhost:3001/api/page/' + (id || '0'));

          case 4:
            return _context.abrupt('return', _context.sent);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

exports.default = App;