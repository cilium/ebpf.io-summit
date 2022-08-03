import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hosts = ({ title, items }) => (
  <section className="py-28 md:py-20" id="summit-hosts">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="mx-auto max-w-[904px] grid grid-cols-3 gap-8 mt-16 lg:grid-cols-2 md:grid-cols-1 md:gap-6">
        {items.map(({ avatar, name, position }, index) => (
          <div className="flex flex-col items-center text-center" key={index}>
            <GatsbyImage
              className="flex-shrink-0 w-[120px] h-[120px] rounded-full"
              image={getImage(avatar)}
              alt={name}
            />
            <h3 className="mt-5 text-2xl font-bold md:text-xl">{name}</h3>
            <span className="mt-1 text-lg text-gray-1 md:text-base">{position}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

Hosts.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape({}).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hosts;
