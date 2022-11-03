// import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Container from 'components/shared/container';
// import DangerousHtml from 'components/shared/dangerous-html';
import Heading from 'components/shared/heading';

import ConnectingIcon from './images/connecting.inline.svg';
import SharingIcon from './images/sharing.inline.svg';
import TrendingIcon from './images/trending.inline.svg';

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
      'eBPF is one of the most talked about technologies in our industry - enabling a new generation of networking, observability and security tools.',
    iconName: 'trending',
  },
];

const icons = {
  connecting: ConnectingIcon,
  sharing: SharingIcon,
  trending: TrendingIcon,
};

const Information = () => (
  // {
  // const data = useStaticQuery(graphql`
  //   query sessionizeScheduleQuery {
  //     sessionizeSchedule
  //   }
  // `);

  // return (
  // <>
  //   <section className="mt-14 lg:mt-12 sm:mt-10" id="agenda">
  //     <Container className="flex flex-col items-center">
  //       <Heading className="text-center" tag="h2">
  //         Schedule
  //       </Heading>
  //       {data.sessionizeSchedule && (
  //         <DangerousHtml className="mt-6 w-full" html={data.sessionizeSchedule} />
  //       )}
  //     </Container>
  //   </section>
  <section className="mt-14 md:mt-10" id="information">
    <Container>
      <div className="flex space-x-8 lg:space-x-6 md:flex-col md:space-x-0 md:space-y-6">
        {cardItems.map(({ iconName, title, description }, index) => {
          const Icon = icons[iconName];
          return (
            <article
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
            </article>
          );
        })}
      </div>
    </Container>
  </section>
  // </>
);
// };
export default Information;
