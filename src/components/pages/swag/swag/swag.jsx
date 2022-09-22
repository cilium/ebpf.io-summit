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

const Swag = () => (
  <section className="mb-36 lg:mb-28 md:mb-20 sm:mb-16">
    <Container className="border-t border-gray-6 border-dashed pt-32 lg:pt-24 md:pt-20 sm:pt-16">
      <div className="flex justify-between items-center lg:flex-col lg:text-center">
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
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 sm:gap-6 mt-10">
        <div className="grid-cols-2 grid gap-8 grid-rows-2 sm:gap-6 sm:grid-cols-1">
          <div className="p-4 border border-gray-2 rounded-lg flex justify-center items-center">
            <StaticImage
              src="./images/sticker.jpg"
              width={147}
              height={138}
              alt="Sticker"
              loading="lazy"
            />
          </div>
          <div className="p-4 border border-gray-2 rounded-lg flex justify-center items-center col-start-1">
            <StaticImage
              src="./images/sticker-2.jpg"
              width={113}
              height={131}
              alt="Sticker"
              loading="lazy"
            />
          </div>
          <div className="p-4 border border-gray-2 rounded-lg flex justify-center items-center row-start-1 col-start-2 row-end-3 sm:col-auto sm:row-auto">
            <StaticImage src="./images/bag.jpg" width={285} height={285} alt="Bag" loading="lazy" />
          </div>
        </div>
        <div className="p-4 border border-gray-2 rounded-lg flex justify-center items-center lg:py-6 xs:flex-col xs:space-y-8">
          <StaticImage
            src="./images/t-shirt.jpg"
            width={224}
            height={277}
            alt="T-Shirt"
            loading="lazy"
          />
          <StaticImage
            src="./images/t-shirt-2.jpg"
            width={227}
            height={277}
            alt="T-Shirt"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  </section>
);

export default Swag;
