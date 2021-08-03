import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Agenda from 'components/pages/home/agenda';
import Hero from 'components/pages/home/hero';
import Information from 'components/pages/home/information';
import LastYear from 'components/pages/home/last-year';
import Register from 'components/pages/home/register';
import Schedule from 'components/pages/home/schedule';
import Speakers from 'components/pages/home/speakers';
import MainLayout from 'layouts/main';

const hero = {
  date: 'August 18-19th',
  title: 'eBPF Summit 2021',
  description:
    '<p>eBPF Summit, a virtual event, targeted at DevOps, SecOps, platform architects, and developers is open for registration.</p>',
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
  subtitle:
    'Sessions run both days 9am-1pm Pacific / 12 midday-4pm Eastern / 5pm-9pm UK / 6pm-10pm Europe',
  link: {
    url: 'https://ebpf-summit-2021.sessionize.com/',
    title: 'View schedule',
  },
  description: 'More sessions being added - check back soon!',
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

const schedule = {
  title: 'Schedule',
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

const IndexPage = ({ path }) => {
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
          title: 'To be announced...',
        },
      },
      {
        avatar: tabithaSable,
        name: 'Tabitha Sable',
        position: 'Kubernetes SIG Security co-chair, Systems Security Engineer, Datadog',
        link: {
          url: 'https://ebpf-summit-2021.sessionize.com/speaker/3efbcdc1-c5e7-4d1c-b745-cd934e6d69b5',
          title: 'To be announced...',
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
    <MainLayout path={path}>
      <Hero {...hero} />
      <Speakers {...speakers} />
      <Agenda {...agenda} />
      <Information {...information} />
      <Schedule {...schedule} />
      <LastYear {...lastYear} />
      <Register {...register} />
    </MainLayout>
  );
};

export default IndexPage;
