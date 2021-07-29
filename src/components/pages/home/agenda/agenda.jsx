import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const Agenda = ({ title, subtitle, link, description }) => (
  <section className="relative text-center text-white bg-black py-28 md:py-20" id="agenda">
    <img className="absolute top-0 left-0 h-full sm:hidden" src={shape1} alt="" aria-hidden />
    <img className="absolute top-0 right-0 h-full sm:hidden" src={shape2} alt="" aria-hidden />
    <Container className="max-w-[592px]">
      <Heading tag="h2">{title}</Heading>
      <p className="mt-12 text-lg text-white md:text-base md:mt-6">{subtitle}</p>
      <Link className="block mt-6 text-xl font-bold md:text-lg text-primary-1" to={link.url}>
        {link.title}
      </Link>
      <p className="mt-4 text-lg md:text-base">{description}</p>
    </Container>
  </section>
);

Agenda.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default Agenda;
