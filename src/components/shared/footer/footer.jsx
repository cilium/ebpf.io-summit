import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LinkedInIcon from 'icons/linkedin.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import Logo from 'images/logo.inline.svg';

const Footer = () => (
  <footer className="py-14 lg:py-8 md:py-6" aria-labelledby="footerHeading">
    <h2 id="footerHeading" className="sr-only">
      Footer
    </h2>
    <Container className="flex items-center justify-between">
      <Link to="https://ebpf.io/">
        <Logo className="lg:w-auto lg:h-8" />
      </Link>

      <Link
        className="font-bold text-primary-2"
        to="https://docs.google.com/document/u/0/d/1pmplQdjghadioJVHaGS5X6KrecbYLWVA2VgVz0BzG9E/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code of Conduct
      </Link>
      <div className="flex items-center space-x-6 md:space-x-3">
        <Link to="http://twitter.com/ebpfsummit" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </Link>
        <Link
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

export default Footer;
