import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Instructions = ({ title, items }) => (
  <section className="pb-40 pt-28 md:pt-20 md:pb-28 sm:pb-20 bg-gray-3">
    <Container small>
      <Heading tag="h2">{title}</Heading>
      <div className="mt-12">
        {items.map(({ stage, content }, index) => (
          <div className="py-8 border-t-2 border-gray-2 last:border-b-2 md:py-6" key={index}>
            <Heading tag="h3" size="lg" className="font-bold">
              {stage}
            </Heading>
            <div
              className="mt-12 prose prose-xl md:prose-lg sm:prose max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

Instructions.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      stage: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Instructions;
