import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Shape from './images/shape.inline.svg';

const Participate = ({ title, items }) => (
  <section className="py-28 md:py-20 bg-gray-3">
    <Container small>
      <Heading tag="h2">{title}</Heading>
      <ul className="mt-12 space-y-9 md:space-y-6 md:mt-8">
        {items.map((item, index) => {
          const isEvenElement = index % 2 === 0;
          return (
            <li
              className="flex items-center space-x-6 text-xl md:space-x-4 md:text-lg sm:flex-col sm:items-start sm:space-y-4"
              key={index}
            >
              <span className="relative w-[60px] h-[70px] block md:h-14 md-w-auto">
                <Shape className={`${isEvenElement ? 'text-primary-1' : ''} md:h-14 md-w-auto`} />
                <span
                  className={`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-3xl font-extrabold leading-none ${
                    isEvenElement ? 'text-black' : 'text-primary-1'
                  } md:text-2xl`}
                >
                  {index + 1}
                </span>
              </span>
              <span className="with-link-secondary" dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

Participate.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Participate;
