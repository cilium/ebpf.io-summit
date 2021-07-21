import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Agenda from 'components/pages/home/agenda';
import Hero from 'components/pages/home/hero';
import Information from 'components/pages/home/information';
import LastYear from 'components/pages/home/last-year';
import Register from 'components/pages/home/register';
import Speakers from 'components/pages/home/speakers';
import Topics from 'components/pages/home/topics';
import MainLayout from 'layouts/main';

const hero = {
  date: 'August 18-19th',
  title: 'Summit 2021',
  description:
    '<p>eBPF Summit, a virtual event, targeted at DevOps, SecOps, platform architects, and developers is open for registration.</p><p>Interested in speaking at eBPF Summit?<br> The <a href="https://sessionize.com/ebpf-summit-2021/" target="_blank" rel="noopener noreferrer">Call For Papers</a> for lightning talks is open until July 23!</p>',
  button1: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true',
    title: 'Register',
  },
  button2: {
    url: 'https://ebpf.io/slack',
    title: 'Join Summit Slack',
  },
};

const agenda = {
  title: 'Agenda',
  subtitle: 'Full schedule coming soon!',
  description:
    'You can expect sessions running both days at 9am-12 midday Pacific / 12 midday-3pm Eastern / 5pm-8pm UK / 6pm-9pm Europe',
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

const topics = {
  title: 'Topics',
  items: [
    'Introduction & Getting Started with eBPF',
    'eBPF-based Observability & Monitoring',
    'Observing, Tracing, and Debugging Applications with eBPF',
    'Runtimes, Kernel Implementations, & eBPF Libraries',
    'eBPF-based Networking, Load-Balancing, & Network Security',
    'How to write eBPF programs in higher-level Languages',
    'Performance Troubleshooting with eBPF',
    'eBPF Projects (bpftrace, Cilium, Falco, ...)',
    'Observing, Tracing, and Debugging Applications with eBPF',
    'Future & Outlook of eBPF',
    'Securing Systems, CI/CD pipelines, Networks, ... with eBPF',
    'Troubleshooting Networking Issues with eBPF',
  ],
  text: 'And much more...',
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

const register = {
  title: 'eBPF Summit 2021 Registration',
  description: `The event is fully virtual and free to attend. By signing up, you'll receive information on how to participate, ahead of the event.`,
  button: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true',
    title: 'Register',
  },
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
      },
      {
        avatar: brendanGregg,
        name: 'Brendan Gregg',
        position: 'Author of «BPF Performance Tools», Lead Performance Engineer, Netflix',
      },
      {
        avatar: lizRice,
        name: 'Liz Rice',
        position: 'Chief Open Source Officer, Isovalent',
      },
      {
        avatar: danielBorkmann,
        name: 'Daniel Borkmann',
        position: 'Co-Creator eBPF, Kernel Developer, Isovalent',
      },
      {
        avatar: tabithaSable,
        name: 'Tabitha Sable',
        position: 'Kubernetes SIG Security co-chair, Systems Security Engineer, Datadog',
      },
      {
        avatar: daveThaler,
        name: 'Dave Thaler',
        position: 'Partner Software Architect, Microsoft',
      },
    ],
  };

  return (
    <MainLayout>
      <Hero {...hero} />
      <Speakers {...speakers} />
      <Agenda {...agenda} />
      <Information {...information} />
      <Topics {...topics} />
      <LastYear {...lastYear} />
      <Register {...register} />
    </MainLayout>
  );
};

export default IndexPage;