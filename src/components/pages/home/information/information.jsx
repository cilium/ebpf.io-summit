import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import CogIcon from 'icons/cog.inline.svg';
import RefreshIcon from 'icons/refresh.inline.svg';
import ShareIcon from 'icons/share.inline.svg';
import StarIcon from 'icons/star.inline.svg';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const icons = {
  star: StarIcon,
  refresh: RefreshIcon,
  cog: CogIcon,
  share: ShareIcon,
};

const Information = ({ title, items }) => (
  <section className="relative bg-black py-28 md:py-20" id="information">
    <img className="absolute top-0 left-0 h-full sm:hidden" src={shape1} alt="" aria-hidden />
    <img className="absolute top-0 right-0 h-full sm:hidden" src={shape2} alt="" aria-hidden />
    <Container>
      <Heading className="text-white" tag="h2">
        {title}
      </Heading>
      <div className="grid grid-cols-2 mt-12 gap-x-8 gap-y-12 md:grid-cols-1 md:gap-y-8">
        {items.map(({ iconName, name, description }, index) => {
          const Icon = icons[iconName];
          return (
            <div className="flex space-x-4" key={index}>
              <Icon className="flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="mt-1 leading-normal text-gray-1">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

Information.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Information;
