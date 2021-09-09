import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const EbpfFoundation = ({ title, text }) => (
  <section className="mt-32 md:mt-20">
    <Container>
      <Heading className="text-center" tag="h2" size="xl">
        {title}
      </Heading>
      <div className="grid grid-cols-2 mt-10 gap-x-8 sm:grid-cols-1 sm:gap-y-5">
        {text.map((item, index) => (
          <ul
            className="text-xl list-style space-y-7 md:text-lg md:space-y-5 with-link-secondary"
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
    </Container>
  </section>
);

EbpfFoundation.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EbpfFoundation;
