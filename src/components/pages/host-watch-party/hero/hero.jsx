import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = ({ title, description, buttonText, buttonUrl }) => (
  <section className="pt-16">
    <Container className="flex justify-between items-center space-x-5 lg:block lg:space-x-0">
      <div className="max-w-[532px] lg:max-w-full lg:text-center">
        <Heading
          className="leading-denser font-bold sm:text-4xl"
          tag="h1"
          size="2xl"
          innerHTML={title}
        />
        <p className="mt-5 max-w-[488px] lg:mx-auto text-lg">{description}</p>
        <Button
          className="h-[52px] px-6 rounded-lg mt-5"
          to={buttonUrl}
          type="button"
          theme="black"
          size="nonde"
        >
          {buttonText}
        </Button>
      </div>

      <StaticImage
        className="max-w-[638px] xl:max-w-[475px] lg:max-w-full lg:mt-12"
        src="./images/illustration-host-watch-party.jpg"
        loading="eager"
        alt="Host a Watch Party ilustration"
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
