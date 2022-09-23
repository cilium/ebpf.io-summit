import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ZoomIcon from './images/zoom.inline.svg';

const data = {
  title: 'Zoom background',
  description: 'Sweeten your Zoom setup with an eBPF Summit background',
  buttonText: 'Get it now',
  buttonUrl: '/images/zoom-background.jpg',
};

const Zoom = () => (
  <section className="pt-36 pb-32 lg:pt-28 lg:pb-24 md:pb-20 md:pt-24 sm:py-16">
    <Container className="flex justify-between items-center space-x-24 lg:block lg:space-x-0">
      <StaticImage
        className="max-w-[672px] xl:max-w-[475px] lg:max-w-full"
        src="./images/zoom.jpg"
        loading="eager"
        alt="Zoom background"
      />
      <div className="max-w-[488px] lg:max-w-full lg:text-center lg:mt-12">
        <div className="flex space-x-5 items-center lg:justify-center">
          <ZoomIcon />
          <Heading className="font-bold text-[40px]" tag="h2" size="lg" innerHTML={data.title} />
        </div>
        <p className="mt-5 lg:mx-auto text-lg">{data.description}</p>

        <a
          className="h-[52px] px-12 rounded-md mt-5 sm:w-full md:h-[44px] text-white bg-black hover:bg-black-hover relative inline-flex justify-center items-center font-extrabold leading-none whitespace-nowrap transition-colors transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline disabled:pointer-events-none"
          href={data.buttonUrl}
          theme="black"
          download
        >
          {data.buttonText}
        </a>
      </div>
    </Container>
  </section>
);

export default Zoom;
