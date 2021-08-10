import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import BlackStar from './icons/black-star.inline.svg';
import YellowStar from './icons/yellow-star.inline.svg';

const EbpfFoundation = ({ title, items }) => (
  <section className="mt-32 md:mt-20">
    <Container>
      <Heading tag="h2" size="xl">
        {title}
      </Heading>
      <div className="grid grid-cols-2 mt-12 gap-x-16 gap-y-8 md:grid-cols-1">
        {items.map(({ title, description }, index) => {
          const isEvenElement = index % 2 === 0;
          return (
            <div key={index}>
              {isEvenElement ? <BlackStar /> : <YellowStar />}
              <h3 className="mt-6 text-2xl font-bold leading-tight md:text-xl">{title}</h3>
              <div
                className="mt-3 space-y-4 text-xl leading-relaxed md:text-lg"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

EbpfFoundation.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EbpfFoundation;
