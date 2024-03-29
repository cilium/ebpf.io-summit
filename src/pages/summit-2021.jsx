/* eslint-disable react/prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Ctf from 'components/pages/home/ctf';
import Information from 'components/pages/home/information';
import LastYear from 'components/pages/home/last-year';
import Schedule from 'components/pages/home/schedule';
import Speakers from 'components/pages/home/speakers';
import Talks from 'components/pages/home/talks';
import Hero from 'components/shared/hero';
import Register from 'components/shared/register';
import SEO from 'components/shared/seo';
import SummitLayout from 'layouts/summit-2021';
import talksData from 'utils/data';

const ogImage = '/images/og-summit-2021.png';

const hero = {
  date: 'August 18-19th',
  title: 'eBPF<br> Summit 2021',
  description:
    '<p>eBPF Summit, a virtual event, targeted at DevOps, SecOps, platform architects, and developers is open for registration.</p>',
  button: {
    url: 'https://ebpf.io/slack',
    title: 'Join Summit Slack',
  },
};

const information = {
  title: 'Information',
  items: [
    {
      iconName: 'star',
      name: 'Summit 2021',
      description: 'Back by popular demand, we’re excited to announce the eBPF Summit 2021.',
    },
    {
      iconName: 'refresh',
      name: 'Connecting end-users',
      description:
        'The eBPF Summit brings together end-users and the eBPF developer community for two days of exciting content all around eBPF.',
    },
    {
      iconName: 'cog',
      name: 'Trending technologies',
      description:
        'eBPF is quickly becoming one of the most talked about technologies in our industry - enabling a new generation of networking, observability and security tools.',
    },
    {
      iconName: 'share',
      name: 'Sharing experience',
      description:
        'Just like last year, we will hear from both end-users sharing their experience using eBPF as well as developers actively working on eBPF and eBPF projects.',
    },
  ],
};

const keynotes = {
  title: 'Keynotes',
  items: talksData.filter((item) => item.keynotes),
};

const talks = {
  title: 'Talks',
  items: talksData.filter((item) => !item.keynotes),
};

const ctf = {
  title: 'Capture The Flag',
  description: 'First-ever eBPF-themed Capture the Flag (CTF) event.',
  links: [
    { linkUrl: 'https://www.youtube.com/watch?v=sYcLw-Fc7wo', linkText: 'Watch challenge 1' },
    { linkUrl: 'https://www.youtube.com/watch?v=ZwbaNmOMeAQ', linkText: 'Watch challenge 2' },
    { linkUrl: 'https://www.youtube.com/watch?v=l18YnO2b7mM', linkText: 'Watch challenge 3' },
  ],
};

const lastYear = {
  title: `Last year's summit`,
  description:
    'Many different perspectives were covered from kernel maintainers working on eBPF implementation, through projects using eBPF technology to create next-generation tools, through to end users sharing their experiences of leveraging this awesome new set of capabilities.',
  link: {
    url: 'https://ebpf.io/summit-2020',
    title: 'eBPF Summit 2020',
  },
  items: [
    {
      number: '3k',
      unit: 'Registrations',
    },
    {
      number: '2',
      unit: 'Days',
    },
    {
      number: '10',
      unit: 'Keynotes',
    },
    {
      number: '28',
      unit: 'Companies',
    },
  ],
};

const IndexPage = () => {
  const { jaanaDogan, brendanGregg, lizRice, danielBorkmann, tabithaSable, daveThaler } =
    useStaticQuery(graphql`
      query {
        jaanaDogan: file(relativePath: { eq: "pages/home/speakers/jaana-dogan.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 96)
          }
        }
        brendanGregg: file(relativePath: { eq: "pages/home/speakers/brendan-gregg.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 96)
          }
        }
        lizRice: file(relativePath: { eq: "pages/home/speakers/liz-rice.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 96)
          }
        }
        danielBorkmann: file(relativePath: { eq: "pages/home/speakers/daniel-borkmann.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 96)
          }
        }
        tabithaSable: file(relativePath: { eq: "pages/home/speakers/tabitha-sable.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 96)
          }
        }
        daveThaler: file(relativePath: { eq: "pages/home/speakers/dave-thaler.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 96)
          }
        }
      }
    `);

  const speakers = {
    title: 'Featured Speakers',
    items: [
      {
        avatar: jaanaDogan,
        name: 'Jaana Dogan',
        position: 'Principal Engineer, AWS',
        link: {
          url: 'https://ebpf-summit-2021.sessionize.com/speaker/756718a2-db38-4ee4-a883-a27c0a57c5b4',
          title: 'eBPF Observability',
        },
      },
      {
        avatar: brendanGregg,
        name: 'Brendan Gregg',
        position: 'Author of «BPF Performance Tools», Lead Performance Engineer, Netflix',
        link: {
          url: 'https://ebpf-summit-2021.sessionize.com/speaker/1896da81-06a4-49fd-a622-a7bcc622bdfe',
          title: 'Getting Started with BPF observability',
        },
      },
      {
        avatar: lizRice,
        name: 'Liz Rice',
        position: 'Chief Open Source Officer, Isovalent',
        link: {
          url: 'https://ebpf-summit-2021.sessionize.com/speaker/e48a182b-1cac-4e51-93b5-5e82408a6116',
          title: 'A Load Balancer from scratch',
        },
      },
      {
        avatar: danielBorkmann,
        name: 'Daniel Borkmann',
        position: 'Co-Creator eBPF, Kernel Developer, Isovalent',
        link: {
          url: 'https://ebpf-summit-2021.sessionize.com/speaker/8c862915-ad55-4b12-bb67-46bc45623157',
          title: 'BPF and Spectre: Mitigating transient execution attacks',
        },
      },
      {
        avatar: tabithaSable,
        name: 'Tabitha Sable',
        position: 'Kubernetes SIG Security co-chair, Systems Security Engineer, Datadog',
        link: {
          url: 'https://ebpf-summit-2021.sessionize.com/speaker/3efbcdc1-c5e7-4d1c-b745-cd934e6d69b5',
          title: 'eBPF Capture the Flag (CTF)',
        },
      },
      {
        avatar: daveThaler,
        name: 'Dave Thaler',
        position: 'Partner Software Architect, Microsoft',
        link: {
          url: 'https://ebpf-summit-2021.sessionize.com/speaker/8406d918-7312-4611-b28f-817a11ce4636',
          title: 'eBPF for Windows',
        },
      },
    ],
  };

  return (
    <SummitLayout>
      <Hero {...hero} />
      <Speakers {...speakers} />
      <Information {...information} />
      {/* <Schedule {...schedule} /> */}
      <Talks className="py-28 md:py-20" {...keynotes} />
      <Talks className="pb-28 md:pb-20" {...talks} />
      <Ctf {...ctf} />
      <LastYear {...lastYear} />
      {/* <Register {...register} /> */}
    </SummitLayout>
  );
};

export default IndexPage;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2021',
    description:
      'Register now for the eBPF Summit 2021, Aug 18-19, 2021, a free virtual event for DevOps, SRE, SecOps, and developers.',
    image: ogImage,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
