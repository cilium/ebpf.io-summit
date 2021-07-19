import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import LoaderSvg from 'icons/loader.inline.svg';

const Button = (props) => {
  const {
    className: additionalClassName,
    to,
    theme,
    size,
    children,
    loading,
    disabled,
    ...otherProps
  } = props;

  const Tag = to ? Link : 'button';

  const styles =
    'relative inline-flex justify-center items-center font-extrabold leading-none whitespace-nowrap duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline disabled:pointer-events-none';

  let themeStyles;
  switch (theme) {
    case 'black':
      themeStyles = 'text-white bg-black';
      break;
    case 'white':
      themeStyles = 'text-black bg-white';
      break;
    case 'primary-1':
      themeStyles = 'bg-primary-1 text-black transition-colors';
      break;
    default:
      return undefined;
  }

  let sizeStyles;
  switch (size) {
    case 'sm':
      sizeStyles = 'px-5 py-3.5';
      break;
    case 'md':
      sizeStyles = 'px-8 py-5 text-xl md:px-6 md:py-3 md:text-lg';
      break;
    default:
      return undefined;
  }

  const className = additionalClassName
    ? `${styles} ${themeStyles} ${sizeStyles} ${additionalClassName}`
    : `${styles} ${themeStyles} ${sizeStyles}`;

  return (
    <Tag className={className} to={to} disabled={disabled} {...otherProps}>
      {loading ? (
        <LoaderSvg className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      ) : (
        children
      )}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  theme: PropTypes.oneOf(['primary-1', 'black', 'white']),
  size: PropTypes.oneOf(['sm', 'md']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
  theme: 'primary-1',
  size: 'md',
  loading: false,
  disabled: false,
};

export default Button;
