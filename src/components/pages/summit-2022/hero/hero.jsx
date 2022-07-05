import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import RegisterFormModal from 'components/shared/register-form-modal';
import SlackIcon from 'icons/slack.inline.svg';

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
    <section className="relative overflow-hidden">
      <Container className="pt-28 pb-6 lg:pb-0 md:pt-24">
        <div className="max-w-[644px] lg:max-w-full">
          <span
            className="with-orange-highlight inline-block p-2 font-bold text-center leading-none uppercase border-2 rounded-md text-black border-primary-5 border-opacity-30"
            dangerouslySetInnerHTML={{ __html: date }}
          />

          <Heading
            className="mt-7 text-[80px] leading-tight font-black"
            tag="h1"
            size="3xl"
            innerHTML={title}
          />
          <div
            className="mt-4 max-w-lg lg:max-w-full space-y-4 text-xl with-link-primary md:text-lg md:space-y-4 font-semibold"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex space-x-6 sm:flex-col mt-9 sm:space-x-0 sm:space-y-3 xs:w-full">
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
        <Illustration className="absolute top-[4.5rem] xl:top-24 right-0 w-[668px] xl:w-[500px] lg:static lg:w-full h-auto lg:mt-12" />
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
