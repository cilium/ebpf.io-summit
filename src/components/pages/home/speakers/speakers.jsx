import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';

const Speakers = ({ title, items }) => (
  <section className="py-28 md:py-20" id="featured-speakers">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="relative grid grid-cols-3 gap-8 mt-12 lg:grid-cols-2 md:grid-cols-1 md:gap-6">
        <img className="absolute -top-5 -left-5 md:top-1/3" src={shape1} alt="" aria-hidden />
        <img className="absolute -top-8 right-8" src={shape2} alt="" aria-hidden />
        <img
          className="absolute -right-7 lg:-right-4 bottom-36 md:bottom-1/4"
          src={shape3}
          alt=""
          aria-hidden
        />
        <img
          className="absolute -left-6 bottom-32 md:-left-4 lg:bottom-1/4 md:bottom-20"
          src={shape2}
          alt=""
          aria-hidden
        />
        {items.map(({ avatar, name, position, link }, index) => (
          <Link
            className="flex flex-col items-center text-center transition-shadow duration-200 border-2 border-gray-2 hover:shadow-xl"
            key={index}
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-8 pb-5">
              <GatsbyImage
                className="flex-shrink-0 w-24 h-24 rounded-full"
                image={getImage(avatar)}
                alt={name}
              />
              <h3 className="mt-4 text-lg font-bold md:text-base">{name}</h3>
              <span className="mt-1 text-lg text-gray-1 md:text-base">{position}</span>
            </div>
            <span className="flex items-center justify-center w-full px-8 md:px-4 py-2.5 mt-auto text-sm font-bold leading-snug bg-gray-2 min-h-[59px]">
              {link.title}
            </span>
          </Link>
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
