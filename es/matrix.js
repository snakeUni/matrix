function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import './index.css';

var Matrix =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Matrix, _React$Component);

  function Matrix() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Matrix);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Matrix)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.getSourcesData = function () {
      var _this$props = _this.props,
          dataSources = _this$props.dataSources,
          length = _this$props.length;
      var matrix = [];
      var row = Math.ceil(dataSources.length / length);

      for (var i = 0; i < row; i++) {
        if (i === row - 1) {
          var lastArray = dataSources.slice(i * length);

          if (lastArray.length < length) {
            for (var j = lastArray.length; j < length; j++) {
              lastArray.push({
                _type: "blank"
              });
            }
          }

          matrix.push(lastArray);
        } else {
          matrix.push(dataSources.slice(i * length, (i + 1) * length));
        }
      }

      return matrix;
    }, _temp));
  }

  _createClass(Matrix, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var sources = this.getSourcesData();
      return React.createElement("div", {
        className: "matrix"
      }, sources.map(function (source, i) {
        return React.createElement("div", {
          className: "matrix-row",
          key: "row-".concat(i)
        }, source.map(function (src, j) {
          if (src._type === "blank") {
            return React.createElement("div", {
              className: "matrix-row-item item-blank",
              key: "item-".concat(i, "-").concat(j)
            });
          } else {
            return React.createElement("div", {
              className: "matrix-row-item item-item",
              key: "item-".concat(i, "-").concat(j)
            }, React.cloneElement(children, {
              src: src
            }));
          }
        }));
      }));
    }
  }]);

  return Matrix;
}(React.Component);

Matrix.defaultProps = {
  length: 4,
  dataSources: []
};
export { Matrix as default };