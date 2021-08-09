import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';
import shape4 from './images/shape-4.svg';

const shapes = [shape1, shape2, shape3, shape4];
const LastYear = ({ title, description, link, items }) => (
  <section className="pb-40 pt-28 md:pt-20 md:pb-28 sm:pb-20" id="last-year's-summit">
    <Container className="text-center" small>
      <Heading tag="h2" size="lg">
        {title}
      </Heading>
      <p className="mt-6 text-xl md:text-lg">{description}</p>
      <Link
        className="flex items-center text-lg font-bold leading-none text-primary-2 space-x-2.5 justify-center mt-7 transition-colors duration-200 hover:text-black"
        to={link.url}
      >
        {link.title}
        <ArrowIcon className="ml-2.5" />
      </Link>
      <div className="grid grid-cols-4 max-w-[920px] mx-auto gap-x-10 mt-10 place-items-center gap-y-8 md:grid-cols-2 md:gap-x-8">
        {items.map(({ number, unit }, index) => {
          const isEvenElement = index % 2 === 0;
          return (
            <div className="relative max-w-[200px]" key={index}>
              <img src={shapes[index]} alt="" aria-hidden />
              <div className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-y-2.5 md:space-y-1.5">
                <span
                  className={`font-extrabold leading-none text-7xl lg:text-5xl md:text-6xl xs:text-5xl ${
                    isEvenElement ? 'text-primary-1' : 'text-black'
                  }`}
                >
                  {number}
                </span>
                <span
                  className={`text-lg font-bold leading-none md:text-base ${
                    isEvenElement ? 'text-white' : 'text-black'
                  }`}
                >
                  {unit}
                </span>
              </div>
            </div>
          );
        })}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LastYear;
