import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LinkedInIcon from 'icons/linkedin.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import Logo from 'images/logo.inline.svg';

const Footer = () => (
  <footer className="py-8 lg:py-6 md:py-4" aria-labelledby="footerHeading">
    <h2 id="footerHeading" className="sr-only">
      Footer
    </h2>
    <Container className="flex items-center justify-between bg-white">
      <Link to="https://ebpf.io/">
        <Logo className="lg:w-auto lg:h-8" />
      </Link>

      <Link
        className="font-bold transition-colors duration-200 text-black hover:text-primary-5"
        to="https://docs.google.com/document/u/0/d/1pmplQdjghadioJVHaGS5X6KrecbYLWVA2VgVz0BzG9E/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code of Conduct
      </Link>
      <div className="flex items-center space-x-6 md:space-x-3">
        <Link
          className="text-black transition-colors duration-200 hover:text-primary-5"
          to="http://twitter.com/ebpfsummit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </Link>
        <Link
          className="text-black transition-colors duration-200 hover:text-primary-5"
          to="http://linkedin.com/company/ebpf-summit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </Link>
      </div>
    </Container>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};

export default Footer;
