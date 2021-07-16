import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ className: additionalClassName, small, children, ...restProps }) => {
  const commonClassName = 'relative mx-auto';
  const defaultSizeClassName = `${commonClassName} max-w-[1216px]`;
  const smSizeClassName = `${commonClassName} max-w-[1008px]`;

  let className = null;

  if (small) {
    className = additionalClassName ? `${smSizeClassName} ${additionalClassName}` : smSizeClassName;
  } else {
    className = additionalClassName
      ? `${defaultSizeClassName} ${additionalClassName}`
      : defaultSizeClassName;
  }

  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
  small: false,
};

export default Container;
