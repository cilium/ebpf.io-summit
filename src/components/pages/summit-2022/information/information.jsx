import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ConnectingIcon from './images/connecting.inline.svg';
import hexagon from './images/hexagon.svg';
import HourglassIcon from './images/hourglass.inline.svg';
import SharingIcon from './images/sharing.inline.svg';
import TrendingIcon from './images/trending.inline.svg';

const title = 'Information';
const description = 'Back by popular demand, we’re excited to announce the eBPF Summit 2022';

const cardItems = [
  {
    title: 'Connecting end-users',
    description:
      'The eBPF Summit brings together end-user and the eBPF developer community for two days of exciting content all around eBPF. ',
    iconName: 'connecting',
  },
  {
    title: 'Sharing experience',
    description:
      'Just like last year, we will hear from both end-users sharing their experience using eBPF as well as developers actively working on eBPF and eBPF projects.',
    iconName: 'sharing',
  },
  {
    title: 'Trending technologies',
    description:
      'Just like last year, we will hear from both end-users sharing their experience using eBPF as well as developers actively working on eBPF and eBPF projects.',
    iconName: 'trending',
  },
];

const icons = {
  connecting: ConnectingIcon,
  sharing: SharingIcon,
  trending: TrendingIcon,
};

const Information = () => (
  <section className="mt-32 lg:mt-28 md:mt-24 sm:mt-20">
    <Container className="flex flex-col items-center">
      <div className="max-w-3xl md:max-w-2xl text-center">
        <Heading size="xl" tag="h2">
          {title}
        </Heading>
        <p className="text-xl lg:text-lg md:text-base mt-5 leading-normal">{description}</p>
      </div>
      <div className="mt-14 md:mt-10 flex space-x-8 lg:space-x-6 md:flex-col md:space-x-0 md:space-y-6">
        {cardItems.map(({ iconName, title, description }, index) => {
          const Icon = icons[iconName];
          return (
            <div
              className="border border-gray-2 rounded-lg flex flex-col items-start p-8 lg:p-6 flex-1"
              key={index}
            >
              <Icon className="shrink-0 w-14 h-auto" />
              <Heading
                tag="h3"
                className="leading-tight text-2xl lg:text-xl md:text-xl mt-6 md:mt-4"
              >
                {title}
              </Heading>
              <p className="mt-2.5 text-lg lg:text-base leading-normal">{description}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-7 relative flex bg-gray-3 items-center self-stretch justify-center py-14 md:py-10 rounded-lg space-x-4 md:flex-col md:space-x-0 md:space-y-4 overflow-hidden">
        <img
          className="absolute -right-40 -bottom-20 lg:-right-64 sm:hidden"
          src={hexagon}
          alt=""
          aria-hidden
        />
        <img
          className="absolute -left-40 lg:-left-64 -top-20 sm:hidden"
          src={hexagon}
          alt=""
          aria-hidden
        />
        <HourglassIcon className="shrink-0 w-[30px] h-[34px] md:w-6 md:h-7" />
        <p className="text-3xl text-center md:text-left md:text-xl font-medium leading-none">
          Full schedule coming soon
        </p>
      </div>
    </Container>
  </section>
);

export default Information;
