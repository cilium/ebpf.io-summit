import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import useWindowSize from 'hooks/use-window-size';
import SlackIcon from 'icons/slack.inline.svg';

import Image from './images/image.inline.svg';

const MOBILE_WIDTH = 414;

const Hero = ({ date, title, description, button1, button2 }) => {
  const { width } = useWindowSize();
  const [buttonText, setButtonText] = useState(button2.title);

  useEffect(() => {
    if (width < MOBILE_WIDTH) {
      setButtonText('Join Summit');
    } else {
      setButtonText(button2.title);
    }
  }, [button2.title, width]);

  return (
    <section className="overflow-hidden text-white bg-black">
      <Container className="py-32 md:pt-24 md:pb-20 xs:pb-10">
        <div className="max-w-[592px] lg:max-w-[auto] lg:mb-9">
          <span className="inline-block px-4 py-3 font-bold leading-none uppercase border-2 text-primary-1 border-primary-1">
            {date}
          </span>
          <Heading className="mt-6" tag="h1" size="2xl">
            {title}
          </Heading>
          <div
            className="mt-6 space-y-6 text-xl with-link-primary md:text-lg md:space-y-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex space-x-6 mt-9 sm:space-x-3 xs:w-full">
            <Button className="xs:px-3.5 xs:flex-1" to={button1.url}>
              {button1.title}
            </Button>
            <Button className="xs:px-3.5 xs:flex-1" to={button2.url} theme="white">
              <SlackIcon className="mr-2.5 xs:mr-1.5 xs:h-5 xs:w-auto" />
              {buttonText}
            </Button>
          </div>
        </div>

        <Image className="absolute top-0 -right-48 xl:w-[550px] xl:-right-7 xl:top-16 lg:static lg:w-full h-auto" />
      </Container>
    </section>
  );
};

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
