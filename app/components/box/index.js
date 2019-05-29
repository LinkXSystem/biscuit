import React from 'react';
import PropTypes from 'prop-types';
import StyleProptype from 'react-style-proptype';

const Box = ({
  element,
  className,
  style,
  children,
  componentRef,
  width,
  height,
  ...componentProps
}) => {
  const _style = Object.assign(
    {
      width,
      height
    },
    style
  );

  return React.createElement(
    element,
    {
      className,
      ref: componentRef,
      style: _style,
      ...componentProps
    },
    children
  );
};

Box.defaultProps = {
  element: 'div',
  style: {}
};

Box.propTypes = {
  element: PropTypes.string,
  style: StyleProptype,
  /* eslint-disable  react/require-default-props */
  className: PropTypes.string,
  children: PropTypes.node,
  componentRef: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  /* eslint-enable  react/require-default-props */
};

export default Box;
