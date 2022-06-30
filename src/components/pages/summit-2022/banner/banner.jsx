import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';

import honeycombLeft from './images/honeycomb-left.svg';
import honeycomb from './images/honeycomb.svg';
import shape from './images/shape.svg';

const Banner = () => (
  <section className="my-32 lg:my-28 md:my-24 sm:my-20 overflow-hidden">
    <Container className="mx-auto relative flex-col bg-orange-gradient flex items-center justify-center py-14 rounded-lg">
      <img className="absolute top-full left-3/8" src={shape} alt="" aria-hidden />
      <img className="absolute right-0 md:hidden" src={honeycomb} alt="" aria-hidden />
      <img className="absolute left-0 md:hidden" src={honeycombLeft} alt="" aria-hidden />
      <p className="text-4xl text-center md:text-3xl font-extrabold leading-none">
        eBPF Summit 2022 Registration
      </p>
      <p className="text-lg md:text-base max-w-2xl md:max-w-xl text-center mt-6 leading-normal">
        The event is fully virtual and free to attend. By signing up, you'll receive information on
        how to participate, ahead of the event.
      </p>
      <Button className="mt-7 sm:w-full px-7 py-4" theme="black" to="#form">
        Register for event
      </Button>
    </Container>
  </section>
);

export default Banner;
