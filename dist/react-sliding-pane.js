'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var Modal = _interopDefault(require('react-modal'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var CLOSE_TIMEOUT = 500;
function ReactSlidingPane(props) {
  var isOpen = props.isOpen,
      title = props.title,
      subtitle = props.subtitle,
      onRequestClose = props.onRequestClose,
      onAfterOpen = props.onAfterOpen,
      children = props.children,
      className = props.className,
      overlayClassName = props.overlayClassName,
      closeIcon = props.closeIcon,
      _props$from = props.from,
      from = _props$from === void 0 ? 'right' : _props$from,
      width = props.width;
  var directionClass = "slide-pane_from_".concat(from);
  return React.createElement(Modal, _extends({}, props, {
    className: "slide-pane ".concat(directionClass, " ").concat(className || ''),
    style: {
      content: {
        width: width || '80%'
      }
    },
    overlayClassName: "slide-pane__overlay ".concat(overlayClassName || ''),
    closeTimeoutMS: CLOSE_TIMEOUT,
    isOpen: isOpen,
    onAfterOpen: onAfterOpen,
    onRequestClose: onRequestClose,
    contentLabel: "Modal \"".concat(title || '', "\"")
  }), React.createElement("div", {
    className: "slide-pane__header"
  }, React.createElement("div", {
    className: "slide-pane__close",
    onClick: onRequestClose
  }, closeIcon ? closeIcon : React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 22"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"
  }))), React.createElement("div", {
    className: "slide-pane__title-wrapper"
  }, React.createElement("h2", {
    className: "slide-pane__title"
  }, title), React.createElement("div", {
    className: "slide-pane__subtitle"
  }, subtitle))), React.createElement("div", {
    className: "slide-pane__content"
  }, children));
}
ReactSlidingPane.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.any,
  subtitle: PropTypes.any,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  from: PropTypes.oneOf(['left', 'right', 'bottom']),
  width: PropTypes.string,
  closeIcon: PropTypes.any
};

module.exports = ReactSlidingPane;
