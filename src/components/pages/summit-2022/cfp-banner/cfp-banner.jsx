import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';

import honeycomb from './images/honeycomb.svg';

const CfpBanner = () => (
  <section className="mt-16 md:mt-12">
    <Container>
      <div className="relative overflow-hidden bg-orange-gradient flex space-x-9 items-center justify-center py-8 rounded-lg md:flex-col md:space-x-0 md:space-y-6 px-6">
        <img className="absolute right-0 md:hidden" src={honeycomb} alt="" aria-hidden />
        <img className="absolute -left-9 md:hidden rotate-180" src={honeycomb} alt="" aria-hidden />

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
