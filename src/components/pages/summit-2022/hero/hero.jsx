import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import RegisterFormModal from 'components/shared/register-form-modal';
import SlackIcon from 'icons/slack.inline.svg';

import drop1 from './images/drop-1.png';
import drop2 from './images/drop-2.png';
import Illustration from './images/illustration.inline.svg';

const Hero = ({ date, title, description, firstButton, secondButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <section className="relative">
      <img
        className="absolute -z-10 right-0 md:-right-4 sm:-right-12 w-[200px] xl:hidden -top-20 lg:block"
        src={drop1}
        alt=""
        aria-hidden
      />
      <img
        className="absolute -z-10 -top-3 left-0 md:-left-4 sm:-left-12 w-[200px] xl:hidden lg:block"
        src={drop2}
        alt=""
        aria-hidden
      />
      <Container className="pt-28 pb-6 lg:pb-0 md:pt-24 lg:w-[95%]">
        <div className="max-w-[644px] lg:max-w-full lg:text-center">
          <span
            className="with-orange-highlight inline-block p-2 font-bold text-center leading-none uppercase border-2 rounded-md text-black border-primary-5 border-opacity-30"
            dangerouslySetInnerHTML={{ __html: date }}
          />

          <Heading
            className="mt-7 text-[80px] sm:text-5xl leading-tight font-black"
            tag="h1"
            size="3xl"
            innerHTML={title}
          />
          <div
            className="mt-4 max-w-lg lg:max-w-xl md:max-w-lg sm:max-w-sm lg:mx-auto space-y-4 text-xl with-link-primary md:text-lg md:space-y-4 font-semibold"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex space-x-6 sm:flex-col mt-9 sm:space-x-0 sm:space-y-3 xs:w-full lg:justify-center">
            <Button
              className="xs:px-3.5 xs:flex-1 rounded-lg sm:min-h-[44px]"
              type="button"
              theme="orange"
              size="sm"
              onClick={openModal}
            >
              {firstButton.title}
            </Button>
            <div className="flex space-x-6 sm:w-full sm:space-x-3">
              <Button
                className="xs:px-3.5 sm:flex-1 flex items-center space-x-3 rounded-lg"
                to={secondButton.url}
                theme="gray"
                size="sm"
              >
                <SlackIcon className="shrink-0 w-6 h-6 sm:w-5 sm:h-5" />
                <span>{secondButton.title}</span>
              </Button>
            </div>
          </div>
        </div>
        <Illustration
          className="absolute top-[4.5rem] xl:top-24 right-8 w-[648px] xl:w-[490px] xl:right-0 lg:static lg:w-full h-auto lg:mt-12"
          alt={Illustration}
        />
      </Container>
      <RegisterFormModal isOpen={isOpen} closeModal={closeModal} />
    </section>
  );
};

Hero.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstButton: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),
  secondButton: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),
};

Hero.defaultProps = {
  firstButton: {
    url: null,
  },
  secondButton: {
    url: null,
  },
};

export default Hero;
