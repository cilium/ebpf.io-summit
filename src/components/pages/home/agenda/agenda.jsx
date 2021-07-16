import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const Agenda = ({ title, subtitle, description }) => (
  <section className="relative text-center text-white bg-black py-28">
    <img className="absolute top-0 left-0" src={shape1} alt="" aria-hidden />
    <img className="absolute top-0 right-0" src={shape2} alt="" aria-hidden />
    <Container className="max-w-[592px]">
      <Heading tag="h2">{title}</Heading>
      <h3 className="mt-12 text-3xl font-extrabold leading-none text-primary-1">{subtitle}</h3>
      <p className="mt-4 text-lg">{description}</p>
    </Container>
  </section>
);

Agenda.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Agenda;
