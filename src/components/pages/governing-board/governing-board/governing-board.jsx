import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import LinkedinIcon from './icons/linkedin.inline.svg';
import TwitterIcon from './icons/twitter.inline.svg';

const GoverningBoard = ({ title, description, items }) => (
  <section className="my-28 md:my-20">
    <Container>
      <Heading tag="h2" size="xl">
        {title}
      </Heading>
      <p className="mt-8 text-xl leading-relaxed md:text-lg">{description}</p>
      <div className="grid grid-cols-2 gap-8 lg:gap-6 mt-28 md:grid-cols-1 md:mt-20 md:gap-6">
        {items.map(({ avatar, name, position, twitterUrl, linkedinUrl }, index) => (
          <div className="flex space-x-8 border-2 lg:space-x-6 border-gray-2" key={index}>
            <GatsbyImage
              className="flex-shrink-0 lg:w-40 lg:h-auto"
              image={getImage(avatar)}
              alt={name}
            />
            <div className="py-8 lg:py-4">
              <h3 className="text-2xl font-bold leading-snug lg:text-lg">{name}</h3>
              <span className="mt-2 text-xl leading-snug lg:text-base text-gray-1">{position}</span>
              <div className="flex mt-6 space-x-4 lg:mt-3">
                <Link to={twitterUrl}>
                  <TwitterIcon className="lg:w-7 lg:h-auto" />
                </Link>
                <Link to={linkedinUrl}>
                  <LinkedinIcon className="lg:w-7 lg:h-auto" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

GoverningBoard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape(PropTypes.any).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      twitterUrl: PropTypes.string,
      linkedinUrl: PropTypes.string,
    })
  ).isRequired,
};

export default GoverningBoard;
