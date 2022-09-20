import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const data = {
  title: 'T-shirts, stickers and bags',
  description: 'Get the buzz for your laptop or your next conference t-shirt in the store',
  buttonText: 'Visit our store',
  buttonUrl: '/swag',
};

const Zoom = () => (
  <section className="">
    <Container className="border-t border-gray-6 pt-32 lg:pt-24 md:pt-20 sm:pt-16">
      <div className="flex justify-between items-center">
        <div className="flex-col flex space-y-4">
          <Heading className="font-bold text-[40px]" tag="h2" size="lg" innerHTML={data.title} />
          <p className="mt-5 lg:mx-auto text-lg">{data.description}</p>{' '}
        </div>
        <Button
          className="h-[52px] px-12 rounded-md mt-5 sm:w-full md:h-[44px]"
          to={data.buttonUrl}
          theme="black"
          size="none"
        >
          {data.buttonText}
        </Button>
      </div>
    </Container>
  </section>
);

export default Zoom;
