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

class CustomChat extends _react.PureComponent {
  componentDidUpdate() {
    const {
      handleParse
    } = this.props;
    handleParse();
  }

  render() {
    const {
      children,
      pageId,
      themeColor,
      loggedInGreeting,
      loggedOutGreeting,
      dataRef,
      greetingDialogDisplay,
      greetingDialogDelay
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "fb-customerchat",
      page_id: pageId,
      theme_color: themeColor,
      logged_in_greeting: loggedInGreeting,
      logged_out_greeting: loggedOutGreeting,
      greeting_dialog_display: greetingDialogDisplay,
      greeting_dialog_delay: greetingDialogDelay,
      "data-ref": dataRef
    }, children);
  }

}

(0, _defineProperty2.default)(CustomChat, "defaultProps", {
  children: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  dataRef: undefined,
  greetingDialogDisplay: undefined,
  greetingDialogDelay: undefined
});

var _default = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(_Parser.default, null, ({
  handleParse
}) => /*#__PURE__*/_react.default.createElement(CustomChat, (0, _extends2.default)({}, props, {
  handleParse: handleParse,
  ref: ref
}))));

exports.default = _default;
//# sourceMappingURL=CustomChat.js.map