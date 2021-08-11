import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CtfSvg from 'images/ctf.inline.svg';

const Ctf = ({ title, description, linkUrl, linkText }) => (
  <section className="py-28 md:py-20" id="capture-the-flag">
    <Container className="flex flex-col items-center">
      <Heading tag="h2">{title}</Heading>
      <p
        className="mt-6 text-xl text-center md:text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link className="text-lg mt-7" to={linkUrl} theme="primary" withArrow>
        {linkText}
      </Link>
      <CtfSvg className="mt-14 sm:mt-7 sm:max-w-full" />
    </Container>
  </section>
);

Ctf.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Ctf;
