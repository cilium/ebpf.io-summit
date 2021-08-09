import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const HeroFoundation = () => (
  <section className="bg-center bg-hero-foundation">
    <Container className="text-center py-28">
      <Heading tag="h1" size="2xl">
        eBPF Foundation
      </Heading>
    </Container>
  </section>
);

export default HeroFoundation;
