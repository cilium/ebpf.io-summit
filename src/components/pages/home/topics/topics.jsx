import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import CheckIcon from 'icons/check.inline.svg';

const Topics = ({ title, items, text }) => (
  <section className="bg-gray-3 py-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="mt-12">
        <ul className="grid grid-cols-2 gap-y-6 gap-x-8">
          {items.map((item, index) => (
            <li className="flex space-x-3 text-lg font-medium leading-snug" key={index}>
              <CheckIcon className="flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <span className="inline-block mt-12 text-lg font-medium text-gray-1">{text}</span>
      </div>
    </Container>
  </section>
);

Topics.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
};

export default Topics;
