import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CtfSvg from 'images/ctf.inline.svg';

const Ctf = ({ title, description, links }) => (
  <section className="py-28 md:py-20 bg-gray-3" id="capture-the-flag">
    <Container className="flex flex-col items-center">
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <p
        className="mt-6 text-xl text-center md:text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="flex flex-col space-y-5 mt-7">
        {links.map(({ linkUrl, linkText }, index) => (
          <Link
            key={index}
            className="text-lg"
            to={linkUrl}
            theme="primary"
            target="_blank"
            rel="noopener noreferrer"
            withArrow
          >
            {linkText}
          </Link>
        ))}
      </div>

      <CtfSvg className="mt-14 sm:mt-7 sm:max-w-full" />
    </Container>
  </section>
);

Ctf.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      linkUrl: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Ctf;
