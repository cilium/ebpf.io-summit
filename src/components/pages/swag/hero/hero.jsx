import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = ({ title, description, buttonText, buttonUrl }) => (
  <section>
    <Container className="flex justify-between items-center space-x-5 lg:flex-col lg:items-stretch lg:space-y-14 lg:space-x-0">
      <div className="shrink-0 max-w-[592px] py-20 lg:pb-0 lg:max-w-full lg:text-center">
        <Heading
          className="leading-denser font-bold sm:text-4xl"
          tag="h1"
          size="2xl"
          innerHTML={title}
        />
        <p className="mt-5 max-w-[488px] lg:mx-auto text-lg">{description}</p>
        <Button
          className="h-[52px] px-6 rounded-lg mt-5 sm:w-full md:h-[44px]"
          to={buttonUrl}
          theme="black"
          size="none"
        >
          {buttonText}
        </Button>
      </div>
      <StaticImage
        className="max-w-[782px] xl:max-w-[700px] absolute top-1/2 -z-10 -translate-y-1/2 -right-40 lg:static lg:max-w-full lg:translate-y-0"
        src="./images/illustration-swag.jpg"
        loading="eager"
        alt="Swag illustration"
      />
    </Container>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Hero;
