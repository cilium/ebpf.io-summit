import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';

const Speakers = ({ title, items }) => (
  <section className="py-28">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="relative grid grid-cols-3 gap-8 mt-12">
        <img className="absolute -top-5 -left-5" src={shape1} alt="" aria-hidden />
        <img className="absolute -top-8 right-8" src={shape2} alt="" aria-hidden />
        <img className="absolute -right-7 bottom-36" src={shape3} alt="" aria-hidden />
        <img className="absolute -bottom-8 left-1/4" src={shape2} alt="" aria-hidden />
        {items.map(({ avatar, name, position }, index) => (
          <div className="p-8 pb-6 text-center border-2 border-gray-2" key={index}>
            <GatsbyImage className="rounded-full" image={getImage(avatar)} alt={name} />
            <h3 className="mt-4 text-lg font-bold">{name}</h3>
            <span className="mt-1 text-lg text-gray-1">{position}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

Speakers.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape(PropTypes.any).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Speakers;
