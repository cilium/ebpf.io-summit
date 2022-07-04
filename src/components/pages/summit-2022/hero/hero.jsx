import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import CustomModal from 'components/shared/custom-modal';
import Heading from 'components/shared/heading';
import HubspotForm from 'components/shared/hubspot-form';
import CloseIcon from 'icons/close.inline.svg';
import SlackIcon from 'icons/slack.inline.svg';

const HUBSPOT_FORM_ID = 'ecd4bee1-a31f-4c5c-83b6-ee7df83c885d';

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
    <section className="overflow-hidden">
      <Container className="pt-28 pb-32 md:pt-24 md:pb-16 sm:pt-16 xs:pb-9">
        <div className="max-w-[644px] lg:max-w-[auto] lg:mb-9">
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
            className="mt-4 space-y-4 text-xl with-link-primary md:text-lg md:space-y-4 font-semibold"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex space-x-6 sm:flex-col mt-9 sm:space-x-0 sm:space-y-3 xs:w-full">
            <Button
              className="xs:px-3.5 xs:flex-1 rounded-lg"
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
                <SlackIcon className="shrink-0 w-6 h-6" />
                <span>{secondButton.title}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* TODO: add hero image */}
        {/* <Image className="absolute top-0 -right-48 w-[700px] xl:w-[550px] xl:-right-7 xl:top-16 lg:static lg:w-full h-auto" /> */}
      </Container>
      <CustomModal
        className="relative p-11 overflow-scroll lg:p-8 md:py-7"
        title="Register form"
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <CloseIcon className="absolute w-4 h-4 top-4 right-5" role="button" onClick={closeModal} />
        <Heading className="text-center" size="lg" tag="h2">
          Register for eBPF Summit
        </Heading>
        <HubspotForm className="min-h-[870px] mt-8" hubspotFormId={HUBSPOT_FORM_ID} />
      </CustomModal>
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
