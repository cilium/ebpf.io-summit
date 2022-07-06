import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';

import drop from './images/drop.png';
import honeycomb from './images/honeycomb.svg';

const CfpBanner = () => (
  <section className="mt-32 lg:mt-28 md:mt-24 sm:mt-20" id="cfp">
    <Container>
      <img
        className="mix-blend-multiply absolute w-[378px] xl:w-[300px] xl:right-0 xl:bottom-6 lg:w-[250px] lg:bottom-12 md:top-32 sm:hidden -right-10 z-20 bottom-0"
        src={drop}
        alt=""
        aria-hidden
      />
      <div className="relative overflow-hidden bg-orange-gradient flex space-x-9 items-center justify-center py-8 rounded-lg md:flex-col md:space-x-0 md:space-y-6 px-6">
        <img
          className="absolute -left-9 md:hidden rotate-180 lg:-left-40"
          src={honeycomb}
          alt=""
          aria-hidden
        />

        <p className="text-3xl text-center font-bold leading-none">Call for proposals: open now</p>
        <Button
          className="sm:w-full rounded-lg"
          size="sm"
          theme="black"
          to="https://sessionize.com/ebpf-summit-2022"
          target="_blank"
        >
          Send proposal
        </Button>
      </div>
    </Container>
  </section>
);

export default CfpBanner;
