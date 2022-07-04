import React, { useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import CustomModal from 'components/shared/custom-modal';
import Heading from 'components/shared/heading';
import HubspotForm from 'components/shared/hubspot-form';
import CloseIcon from 'icons/close.inline.svg';

import honeycombLeft from './images/honeycomb-left.svg';
import honeycomb from './images/honeycomb.svg';
import shape from './images/shape.svg';

const HUBSPOT_FORM_ID = 'ecd4bee1-a31f-4c5c-83b6-ee7df83c885d';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <section className="pb-36 lg:pb-32 md:pb-28 sm:pb-24 bg-gray-3">
      <Container>
        <div className="relative flex-col bg-orange-gradient flex items-center justify-center py-14 rounded-lg px-6">
          <img className="absolute top-full left-3/8" src={shape} alt="" aria-hidden />
          <img className="absolute right-0 lg:hidden" src={honeycomb} alt="" aria-hidden />
          <img className="absolute left-0 lg:hidden" src={honeycombLeft} alt="" aria-hidden />
          <p className="text-4xl text-center md:text-3xl font-extrabold leading-none">
            eBPF Summit 2022 Registration
          </p>
          <p className="text-lg md:text-base max-w-2xl md:max-w-xl text-center mt-6 leading-normal">
            The event is fully virtual and free to attend. By signing up, you'll receive information
            on how to participate, ahead of the event.
          </p>
          <Button
            className="mt-7 sm:w-full px-7 py-4 rounded-lg"
            type="button"
            theme="black"
            onClick={openModal}
          >
            Register for event
          </Button>
        </div>
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

export default Banner;
