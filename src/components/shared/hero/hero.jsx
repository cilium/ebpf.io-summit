import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Image from './images/image.inline.svg';

const Hero = ({ date, title, description, button }) => (
  <section className="overflow-hidden text-white bg-black">
    <Container className="py-32 md:pt-24 md:pb-16 xs:pb-9">
      <div className="max-w-[592px] lg:max-w-[auto] lg:mb-9">
        <span className="inline-block px-4 py-3 font-bold leading-none uppercase border-2 text-primary-1 border-primary-1">
          {date}
        </span>
        <Heading className="mt-6" tag="h1" size="2xl" innerHTML={title} />
        <div
          className="mt-6 space-y-6 text-xl with-link-primary md:text-lg md:space-y-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex space-x-6 sm:flex-col mt-9 sm:space-x-0 sm:space-y-3 xs:w-full">
          <Button
            className="xs:px-3.5 xs:flex-1"
            to={button.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button.title}
          </Button>
          <div className="flex space-x-6 sm:w-full sm:space-x-3">
            <Button
              className="xs:px-3.5 sm:flex-1"
              to="https://youtu.be/Kp3PHPuFkaA"
              target="_blank"
              rel="noopener noreferrer"
              theme="white"
            >
              Watch day 1
            </Button>
            <Button
              className="xs:px-3.5 sm:flex-1"
              to="https://youtu.be/ZNtVedFsD-k"
              target="_blank"
              rel="noopener noreferrer"
              theme="white"
            >
              Watch day 2
            </Button>
          </div>
        </div>
      </div>

      <Image className="absolute top-0 -right-48 w-[700px] xl:w-[550px] xl:-right-7 xl:top-16 lg:static lg:w-full h-auto" />
    </Container>
  </section>
);

Hero.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
