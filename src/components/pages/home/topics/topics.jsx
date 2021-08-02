import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Schedule from './schedule';

const Topics = ({ title }) => (
  <section className="bg-gray-3 py-28 md:py-20" id="topics">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <Schedule className="mt-10" />
    </Container>
  </section>
);

Topics.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Topics;
