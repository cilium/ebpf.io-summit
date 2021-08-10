import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const HeroFoundation = () => (
  <section className="bg-center bg-hero-foundation bg-no-repeat mt-2.5">
    <Container className="text-center py-28">
      <Heading tag="h1" size="2xl">
        eBPF Foundation
      </Heading>
    </Container>
  </section>
);

export default HeroFoundation;
