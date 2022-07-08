import React, { useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import RegisterFormModal from 'components/shared/register-form-modal';

import honeycombLeft from './images/honeycomb-left.svg';
import honeycomb from './images/honeycomb.svg';
import shape from './images/shape.svg';

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
        <div className="relative flex-col bg-orange-gradient flex items-center justify-center py-14 rounded-lg px-6 overflow-hidden">
          <img className="absolute top-full left-3/8" src={shape} alt="" aria-hidden />
          <img
            className="absolute right-0 xl:-right-10 lg:-right-20 lg:-top-48"
            src={honeycomb}
            alt=""
            aria-hidden
          />
          <img
            className="absolute left-0 xl:-left-14 lg:-left-20 lg:-bottom-48 sm:-left-24 sm:-bottom-52"
            src={honeycombLeft}
            alt=""
            aria-hidden
          />
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
      <RegisterFormModal isOpen={isOpen} closeModal={closeModal} />
    </section>
  );
};

export default Banner;
