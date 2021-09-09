import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button/button';
import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading/heading';

const Join = ({ title, buttonUrl, buttonText }) => (
  <section className="mt-40 lg:mt-32 md:mt-24">
    <Container className="flex flex-col items-center py-20 bg-center bg-cover bg-join-banner bg-yellow-1">
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <Button
        className="mt-8"
        theme="black"
        target="_blank"
        rel="noopener noreferrer"
        to={buttonUrl}
      >
        {buttonText}
      </Button>
    </Container>
  </section>
);

Join.propTypes = {
  title: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Join;
