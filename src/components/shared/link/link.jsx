import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';

const arrow = <ArrowIcon className="ml-2.5" />;

const stylesClassName = 'inline-flex items-center leading-none transition-colors duration-200';

const themeClassNames = {
  primary: 'text-primary-2 font-bold hover:text-black',
};

const Link = ({ className: additionalClassName, to, children, theme, withArrow, ...props }) => {
  const className = classNames(stylesClassName, themeClassNames[theme], additionalClassName);
  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...props}>
        {children}
        {withArrow && arrow}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
      {withArrow && arrow}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
  withArrow: PropTypes.bool,
};

Link.defaultProps = {
  className: null,
  theme: null,
  withArrow: false,
};

export default Link;
