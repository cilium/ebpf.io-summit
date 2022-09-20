import React from 'react';

import Hero from 'components/pages/swag/hero';
import Swag from 'components/pages/swag/swag';
import Zoom from 'components/pages/swag/zoom';
import SEO from 'components/shared/seo';
import HostWatchPartyLayout from 'layouts/host-watch-party';

const hero = {
  title: 'eBPF Summit Attendee Swag',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText: 'Visit our store',
  buttonUrl: '/swag',
};

const HostWatchParty = () => (
  <HostWatchPartyLayout>
    <SEO
      data={{
        title: 'eBPF Summit Attendee Swag',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        // TODO: add ogImage when it is ready
        // image: ogImage,
        slug: '/swag',
      }}
    />
    <Hero {...hero} />
    <Zoom />
    <Swag />
  </HostWatchPartyLayout>
);

export default HostWatchParty;
