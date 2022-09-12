import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Banner from 'components/pages/summit-2022/banner';
import Hero from 'components/pages/summit-2022/hero';
import Hosts from 'components/pages/summit-2022/hosts';
import Information from 'components/pages/summit-2022/information';
import LastYear from 'components/pages/summit-2022/last-year';
import OurVolunteers from 'components/pages/summit-2022/our-volunteers';
import SpeakerWall from 'components/pages/summit-2022/speaker-wall';
import SEO from 'components/shared/seo';
import SummitLayout from 'layouts/summit-2022';

const ogImage = '/images/social-preview-summit-2022.jpg';

const hero = {
  date: 'September <strong>28-29</strong>, 2022',
  title: 'eBPF Summit',
  description:
    '<p>eBPF Summit is a virtual event, targeted at DevOps, SecOps, platform architects, security engineers, and developers. Register to save the date and stay updated on event information.</p>',
  firstButton: {
    title: 'Register for event',
  },
  secondButton: {
    url: 'https://ebpf.io/slack',
    title: 'Join Summit Slack',
  },
};

const speakerWall = {
  title: 'Featured Speakers',
};

const lastYear = {
  title: `Last year's summit`,
  description:
    'eBPF Summit 2021 featured 36 talks from many different perspectives, from kernel maintainers working on eBPF implementation, through projects using eBPF technology to create next-generation tools, through to end users sharing their experiences of leveraging this awesome new set of capabilities. Join us this September for what promises to be an even more exciting edition!',
  link: {
    url: 'https://ebpf.io/summit-2021',
    title: 'eBPF Summit 2021',
  },
  items: [
    {
      number: '3.6k',
      unit: 'Registrations',
      textColor: 'black',
      numberColor: 'orange',
    },
    {
      number: '7',
      unit: 'Keynotes',
      textColor: 'white',
      numberColor: 'white',
    },
    {
      number: '30',
      unit: 'Companies',
      textColor: 'white',
      numberColor: 'orange',
    },
    {
      number: '2',
      unit: 'Days',
      textColor: 'black',
      numberColor: 'orange',
    },
  ],
};

const Summit2022 = () => {
  const { tracyHolmes, duffieCooley, lizRice } = useStaticQuery(graphql`
    query {
      lizRice: file(relativePath: { eq: "pages/summit-2022/hosts/liz-rice.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120)
        }
      }
      duffieCooley: file(relativePath: { eq: "pages/summit-2022/hosts/duffie-cooley.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120)
        }
      }
      tracyHolmes: file(relativePath: { eq: "pages/summit-2022/hosts/tracy-holmes.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120)
        }
      }
    }
  `);

  const hosts = {
    title: 'Your eBPF Summit Hosts',
    items: [
      {
        avatar: lizRice,
        name: 'Liz Rice',
        position: 'Chief Open Source Officer - Isovalent',
      },
      {
        avatar: tracyHolmes,
        name: 'Tracy Holmes',
        position: 'Technical Community Advocate - Isovalent',
      },
      {
        avatar: duffieCooley,
        name: 'Duffie Cooley',
        position: 'Field CTO - Isovalent',
      },
    ],
  };
  return (
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
      <SpeakerWall {...speakerWall} />
      <Hosts {...hosts} />
      <Information />
      <OurVolunteers />
      <LastYear {...lastYear} />
      <Banner />
    </SummitLayout>
  );
};

export default Summit2022;
