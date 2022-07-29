import React from 'react';

import Hero from 'components/pages/host-watch-party/hero';
import ToDoList from 'components/pages/host-watch-party/to-do-list';
import SEO from 'components/shared/seo';
import HostWatchPartyLayout from 'layouts/host-watch-party';

const hero = {
  title: `<span class="text-[#6A6AFB]">Watch party:</span></br> Bring Your Hive Together`,
  description:
    'Do you want to spark or grow your local eBPF community? Host an eBPF Summit Watch Party to gather eBPF enthusiasts from your area and grow the buzz',
  buttonText: 'Contact Us',
  buttonUrl: 'mailto:events@ebpf.io',
};

const toDoList = {
  title: 'What you need to do',
  list: [
    {
      iconName: 'place',
      title: 'Find a place to host the watch party',
      description: 'This can be an office, coffee shop, beach, or porch',
    },
    {
      iconName: 'way',
      title: 'Create a way for people to RSVP',
      description:
        'Stay in touch so people know when are where to meet. We also ask they register for eBPF Summit',
    },
    {
      iconName: 'food',
      title: 'Find some food and drink',
      description:
        'Whether it is just tap water or a company sponsoring a whole buffet your guests will enjoy the refreshments',
    },
    {
      iconName: 'email',
      title: 'Email us',
      description: 'So we can help you promote the event',
      buttonText: 'Email Us for Details',
      buttonUrl: 'mailto:events@ebpf.io',
    },
    {
      iconName: 'swag',
      title: 'Get a swag packet',
      description: 'Receive a swag packet to hand out to your guests (limited supply)',
    },
  ],
};

const HostWatchParty = () => (
  <HostWatchPartyLayout>
    <SEO
      data={{
        title: 'Watch party: Bring Your Hive Together',
        description:
          'Do you want to spark or grow your local eBPF community? Host an eBPF Summit Watch Party to gather eBPF enthusiasts from your area and grow the buzz',
        // TODO: add ogImage when it is ready
        // image: ogImage,
        slug: '/host-a-watch-party',
      }}
    />
    <Hero {...hero} />
    <ToDoList {...toDoList} />
  </HostWatchPartyLayout>
);

export default HostWatchParty;
