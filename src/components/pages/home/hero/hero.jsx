import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import SlackIcon from 'icons/slack.inline.svg';

const Hero = ({ date, title, description, button1, button2 }) => (
  <section className="py-32 text-white bg-black">
    <Container>
      <div className="max-w-[592px]">
        <span className="inline-block px-4 py-3 font-bold leading-none uppercase border-2 text-primary-1 border-primary-1">
          {date}
        </span>
        <Heading className="mt-6" tag="h1" size="2xl">
          {title}
        </Heading>
        <div
          className="mt-6 space-y-6 text-xl with-link-primary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex space-x-6 mt-9">
          <Button to={button1.url}>{button1.title}</Button>
          <Button to={button2.url} theme="white">
            <SlackIcon className="mr-2.5" />
            {button2.title}
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

Hero.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button1: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  button2: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
