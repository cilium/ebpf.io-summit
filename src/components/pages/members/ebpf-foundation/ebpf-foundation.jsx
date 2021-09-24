import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const EbpfFoundation = ({ title, text }) => (
  <section className="mt-32 md:mt-20">
    <Container>
      <Heading tag="h2" size="xl">
        {title}
      </Heading>
      <div
        className="mt-10 max-w-[1008px] text-xl md:text-lg space-y-7 md:space-y-5 with-link-secondary leading-relaxed"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Container>
  </section>
);

EbpfFoundation.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EbpfFoundation;
