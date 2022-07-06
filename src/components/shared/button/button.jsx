import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ChevronIcon from 'icons/chevron.inline.svg';
import LoaderSvg from 'icons/loader.inline.svg';

const arrow = <ChevronIcon className="ml-2.5" />;

const styles =
  'relative inline-flex justify-center items-center font-extrabold leading-none whitespace-nowrap transition-colors transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline disabled:pointer-events-none';

const themeStyles = {
  black: 'text-white bg-black hover:bg-black-hover',
  white: 'text-black bg-white transition-opacity hover:opacity-90',
  'primary-1': 'bg-primary-1 text-black hover:bg-primary-1-hover',
  'with-border': 'text-black border-2 border-black',
  orange: 'text-white bg-button-gradient hover:opacity-90',
  'link-primary': 'text-primary-2',
  gray: 'text-black bg-gray-4 border-[1.5px] border-gray-5 hover:bg-gray-2',
};

const sizeStyles = {
  xs: 'px-4 py-2.5 md:px-3 md:py-2 text-sm',
  sm: 'px-6 py-4 lg:px-4 lg:py-3',
  md: 'px-8 py-5 text-xl md:px-6 md:py-3 md:text-lg',
  none: 'p-0',
};

const Button = (props) => {
  const {
    className: additionalClassName,
    to,
    theme,
    size,
    children,
    withArrow,
    loading,
    disabled,
    ...otherProps
  } = props;

  const Tag = to ? Link : 'button';
  const className = `${styles} ${themeStyles[theme]} ${sizeStyles[size]} ${additionalClassName}`;
  return (
    <Tag className={className} to={to} disabled={disabled} {...otherProps}>
      {loading ? (
        <LoaderSvg className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      ) : (
        <>
          {children}
          {withArrow && arrow}
        </>
      )}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themeStyles)),
  size: PropTypes.oneOf(Object.keys(sizeStyles)),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  withArrow: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  to: null,
  theme: 'primary-1',
  size: 'md',
  loading: false,
  disabled: false,
  withArrow: false,
};

export default Button;
