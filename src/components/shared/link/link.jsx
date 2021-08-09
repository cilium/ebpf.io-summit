import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const themeClassNames = {
  primary: 'text-primary-2 transition-colors duration-200 hover:text-black',
};

const Link = ({ className: additionalClassName, to, children, theme, ...props }) => {
  const className = classNames(themeClassNames[theme], additionalClassName);
  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

Link.defaultProps = {
  className: null,
  theme: null,
};

export default Link;
