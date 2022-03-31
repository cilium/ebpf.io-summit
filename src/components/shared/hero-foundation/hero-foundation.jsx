import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const HeroFoundation = ({ title, description }) => (
  <section className="bg-center bg-hero-foundation bg-no-repeat mt-2.5">
    <Container className="text-center py-28">
      <Heading tag="h1" size="lg">
        {title}
      </Heading>
      <p className="mt-3 text-xl" dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  </section>
);

HeroFoundation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

HeroFoundation.defaultProps = {
  description: null,
};

export default HeroFoundation;
