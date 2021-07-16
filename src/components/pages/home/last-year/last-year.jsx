import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';

import shapeBlack from './images/shape-black.svg';
import shapeYellow from './images/shape-yellow.svg';

const LastYear = ({ title, description, link }) => (
  <section className="pb-40 pt-28">
    <Container className="text-center" small>
      <Heading tag="h2" size="lg">
        {title}
      </Heading>
      <p className="mt-6 text-xl">{description}</p>
      <Link
        className="flex items-center text-lg font-bold leading-none text-primary-2 space-x-2.5 justify-center mt-7"
        to={link.url}
      >
        {link.title}
        <ArrowIcon />
      </Link>
      <div className="grid grid-cols-4 max-w-[920px] mx-auto gap-x-10 mt-10">
        <div className="relative">
          <img src={shapeBlack} alt="" aria-hidden />
          <div className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-y-2.5">
            <span className="font-extrabold leading-none text-primary-1 text-7xl">3k</span>
            <span className="text-lg font-bold leading-none text-white">Registrations</span>
          </div>
        </div>
        <div className="relative">
          <img src={shapeYellow} alt="" aria-hidden />
          <div className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-y-2.5">
            <span className="font-extrabold leading-none text-black text-7xl">2</span>
            <span className="text-lg font-bold leading-none">Days</span>
          </div>
        </div>
        <div className="relative">
          <img className="rotate-180" src={shapeBlack} alt="" aria-hidden />
          <div className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-y-2.5">
            <span className="font-extrabold leading-none text-primary-1 text-7xl">10</span>
            <span className="text-lg font-bold leading-none text-white">Keynotes</span>
          </div>
        </div>
        <div className="relative">
          <img className="rotate-[240deg]" src={shapeYellow} alt="" aria-hidden />
          <div className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-y-2.5">
            <span className="font-extrabold leading-none text-black text-7xl">28</span>
            <span className="text-lg font-bold leading-none">Companies</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

LastYear.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default LastYear;
