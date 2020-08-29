"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Parser = _interopRequireDefault(require("./Parser"));

var _getCurrentHref = _interopRequireDefault(require("./utils/getCurrentHref"));

class Share2 extends _react.PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      href = (0, _getCurrentHref.default)(),
      layout,
      colorScheme,
      action,
      showFaces,
      lazy,
      children,
      width,
      size,
      kidDirectedSite,
      referral
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "fb-share-button",
      "data-ref": referral,
      "data-href": href,
      "data-layout": layout,
      "data-colorscheme": colorScheme,
      "data-action": action,
      "data-show-faces": showFaces,
      "data-lazy": lazy,
      "data-width": width,
      "data-size": size,
      "data-kid-directed-site": kidDirectedSite
    }, children);
  }

}

(0, _defineProperty2.default)(Share2, "defaultProps", {
  layout: undefined,
  showFaces: undefined,
  colorScheme: undefined,
  action: undefined,
  lazy: undefined,
  size: undefined,
  kidDirectedSite: undefined,
  children: undefined,
  href: undefined,
  referral: undefined,
  width: undefined
});

var _default = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(_Parser.default, null, ({
  handleParse
}) => /*#__PURE__*/_react.default.createElement(Share2, (0, _extends2.default)({}, props, {
  handleParse: handleParse,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=Share2.js.map