// import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Banner from 'components/pages/summit-2022/banner';
import CfpBanner from 'components/pages/summit-2022/cfp-banner';
import Hero from 'components/pages/summit-2022/hero';
import SEO from 'components/shared/seo';
import SummitLayout from 'layouts/summit-2022';

const ogImage = '/images/og-summit-2021.png';

const hero = {
  date: 'September <strong>28-29</strong>, 2022',
  title: 'eBPF Summit',
  description:
    '<p>eBPF Summit is a virtual event, targeted at DevOps, SecOps, platform architects, security engineers, and developers. Register to save the date and stay updated on event information.</p>',
  firstButton: {
    url: '#form',
    title: 'Register for event',
  },
  secondButton: {
    url: 'https://ebpf.io/slack',
    title: 'Join Summit Slack',
  },
};

const Summit2022 = () => (
  <SummitLayout>
    <SEO
      data={{
        title: 'eBPF Summit 2022',
        description:
          'Register now for the eBPF Summit 2022, Sep 28-29, 2022, a free virtual event for DevOps, SRE, SecOps, and developers.',
        image: ogImage,
        slug: '/summit-2022',
      }}
    />
    <Hero {...hero} />
    <CfpBanner />
    <Banner />
  </SummitLayout>
);

export default Summit2022;
