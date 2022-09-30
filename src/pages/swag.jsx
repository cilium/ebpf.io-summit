/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/swag/hero';
import Swag from 'components/pages/swag/swag';
import Zoom from 'components/pages/swag/zoom';
import SEO from 'components/shared/seo';
import HostWatchPartyLayout from 'layouts/host-watch-party';

const hero = {
  title: 'eBPF Summit Attendee Swag',
  description: 'Bee a part of the hive, get your eBPF swag now!',
  buttonText: 'Visit our store',
  buttonUrl: 'https://cilium.myspreadshop.net/',
};

const HostWatchParty = () => (
  <HostWatchPartyLayout>
    <Hero {...hero} />
    <Zoom />
    <Swag />
  </HostWatchPartyLayout>
);

export default HostWatchParty;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'Attendee swag for eBPF Summit',
    description: 'Bee a part of the hive, get your eBPF swag now!',
    // TODO: add ogImage when it is ready
    // image: ogImage,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
