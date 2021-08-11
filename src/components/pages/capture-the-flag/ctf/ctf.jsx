import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CtfSvg from 'images/ctf.inline.svg';

const Ctf = ({ title, description, name, url }) => (
  <section className="py-28 md:py-20">
    <Container className="text-xl md:text-lg" small>
      <CtfSvg className="mx-auto w-[415px] h-auto max-w-full" />
      <Heading className="mt-10 text-center md:mt-6 text-7xl" tag="h2">
        {title}
      </Heading>
      <p className="mt-28 md:mt-20 sm:mt-14">{description}</p>
      <div className="mt-8">
        <span className="font-bold">Moderator & Commentator:</span> The awesome{' '}
        <Link
          className="font-bold"
          theme="primary"
          to={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </Link>
      </div>
    </Container>
  </section>
);

Ctf.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Ctf;
