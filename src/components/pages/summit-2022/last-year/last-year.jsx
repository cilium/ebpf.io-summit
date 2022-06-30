import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';
import shape4 from './images/shape-4.svg';

const shapes = [shape1, shape2, shape3, shape4];
const LastYear = ({ title, description, link, items }) => (
  <section
    className="mt-28 md:mt-20 pt-40 pb-32 md:pt-28 md:pb-24 bg-gray-3 bg-hexagon bg-no-repeat bg-right"
    id="last-year's-summit"
  >
    <Container>
      <div className="grid grid-cols-2 items-start gap-x-16">
        <div className="flex flex-col items-start">
          <Heading tag="h2" size="xl" className="!font-bold">
            {title}
          </Heading>
          <p className="mt-6 text-xl md:text-lg text-left">{description}</p>
          <Link className="text-lg mt-7" theme="underline" to={link.url}>
            {link.title}
          </Link>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src="https://www.youtube.com/embed/5XdV4PYNcro"
            frameBorder="0"
            width={592}
            height={333}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded YouTube"
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-36 lg:mt-32 md:mt-28 sm:mt-24 grid grid-cols-4 max-w-[800px] mx-auto gap-x-10 place-items-center gap-y-8 md:grid-cols-2 md:gap-x-8">
        {items.map(({ number, unit, theme }, index) => {
          const isThemeBlack = theme === 'black';
          return (
            <div className="relative max-w-[160px]" key={index}>
              <img src={shapes[index]} alt="" aria-hidden />
              <div className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-y-0.5">
                <span
                  className={`font-semibold leading-none text-7xl lg:text-5xl md:text-6xl xs:text-5xl ${
                    isThemeBlack ? 'text-primary-5' : 'text-white'
                  }`}
                >
                  {number}
                </span>
                <span
                  className={`text-base font-medium leading-none ${
                    isThemeBlack ? 'text-black' : 'text-white'
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
