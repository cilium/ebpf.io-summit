/* eslint-disable react/prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import EbpfFoundation from 'components/pages/members/ebpf-foundation';
import Join from 'components/pages/members/join';
import Members from 'components/pages/members/members';
import SteeringCommittee from 'components/pages/members/steering-committee';
import HeroFoundation from 'components/shared/hero-foundation';
import SEO from 'components/shared/seo';
import CloudflareLogo from 'icons/cloudflare.inline.svg';
import FacebookLogo from 'icons/facebook.inline.svg';
import GoogleLogo from 'icons/google.inline.svg';
import IsovalentLogo from 'icons/isovalent.inline.svg';
import MicrosoftLogo from 'icons/microsoft.inline.svg';
import NetflixLogo from 'icons/netflix.inline.svg';
import MainLayout from 'layouts/main';

const ebpfFoundation = {
  title: 'What is eBPF Foundation?',
  text: [
    '<li>eBPF is a revolutionary technology with origins in the Linux kernel that can run sandboxed programs in an operating system kernel. It is used to safely and efficiently extend the capabilities of the kernel without requiring to change kernel source code or load kernel modules.</li> <li>Historically, the operating system has always been an ideal place to implement observability, security, and networking functionality due to the kernel’s privileged ability to oversee and control the entire system. At the same time, an operating system kernel is hard to evolve due to its central role and high requirement towards stability and security. The rate of innovation at the operating system level has thus traditionally been lower compared to functionality implemented outside of the operating system.</li><li>eBPF changes this formula fundamentally. By allowing to run sandboxed programs within the operating system, application developers can run eBPF programs to add additional capabilities to the operating system at runtime.</li>',
    '<p>The operating system then guarantees safety and execution efficiency as if natively compiled with the aid of a Just-In-Time (JIT) compiler and verification engine. This has led to a wave of <a href="https://ebpf.io/projects/">eBPF-based projects</a> covering a wide array of use cases, including next-generation networking, observability, and security functionality.</p><li>Today, eBPF is used extensively to drive a wide variety of use cases: Providing high-performance networking and load-balancing in modern data centers and cloud native environments, extracting fine-grained security observability data at low overhead, helping application developers trace applications, providing insights for performance troubleshooting, preventive application and container runtime security enforcement, and much more. The possibilities are endless, and the innovation that eBPF is unlocked has only just begun.</li>',
  ],
};

const members = {
  title: 'Members',
  items: [
    { name: 'Platinum', logos: [FacebookLogo, GoogleLogo, IsovalentLogo, MicrosoftLogo] },
    { name: 'Silver', logos: [NetflixLogo] },
  ],
};

const join = {
  title: 'Join as a Member',
  buttonUrl: 'https://enrollment.lfx.linuxfoundation.org/?project=ebpf ',
  buttonText: 'Join now',
};

const FoundationPage = ({ location: { pathname } }) => {
  const {
    andriiNakryiko,
    brendanGregg,
    joeStringer,
    danielBorkmann,
    kpSingh,
    daveThaler,
    lorenzBauer,
    alexeiStarovoitov,
  } = useStaticQuery(graphql`
    query {
      andriiNakryiko: file(
        relativePath: { eq: "pages/members/steering-committee/andrii-nakryiko.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
      brendanGregg: file(
        relativePath: { eq: "pages/members/steering-committee/brendan-gregg.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
      joeStringer: file(relativePath: { eq: "pages/members/steering-committee/joe-stringer.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
      danielBorkmann: file(
        relativePath: { eq: "pages/members/steering-committee/daniel-borkmann.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
      kpSingh: file(relativePath: { eq: "pages/members/steering-committee/kp-singh.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
      daveThaler: file(relativePath: { eq: "pages/members/steering-committee/dave-thaler.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
      lorenzBauer: file(relativePath: { eq: "pages/members/steering-committee/lorenz-bauer.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
      alexeiStarovoitov: file(
        relativePath: { eq: "pages/members/steering-committee/alexei-starovoitov.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 48)
        }
      }
    }
  `);

  const steeringCommittee = {
    title: 'eBPF Steering Committee',
    description:
      'The eBPF Steering Committee (BSC) is responsible for the technical direction and overall vision of eBPF, the collaboration among projects, making recommendations to the governing board, defining the minimal requirements of eBPF runtimes, overseeing community events, maintaining project lifecycle procedures, and communicating on behalf of the eBPF community.',
    items: [
      {
        logo: FacebookLogo,
        text: `Andrii is a Software Engineer in Facebook's Linux kernel team. He's a co-maintainer of BPF kernel tree and libbpf library, and focuses on BPF usability, CO-RE, and tracing applications.`,
        avatar: andriiNakryiko,
        name: 'Andrii Nakryiko',
        position: 'Software Engineer',
        twitterUrl: 'https://twitter.com/anakryiko/',
        linkedInUrl: 'https://www.linkedin.com/in/anakryiko/',
        githubUrl: 'https://github.com/anakryiko',
        blogUrl: 'https://nakryiko.com/',
      },
      {
        logo: CloudflareLogo,
        text: `Lorenz is a maintainer of the cilium/ebpf Go library. At Cloudflare he works on unimog, a global L4 load balancer, and all things related to eBPF.`,
        avatar: lorenzBauer,
        name: 'Lorenz Bauer',
        position: 'Systems Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/lorenzbauer',
        githubUrl: 'https://github.com/lmb',
      },
      {
        logo: IsovalentLogo,
        text: `Daniel Borkmann co-created eBPF and is a kernel developer at Isovalent working on all things eBPF, the Linux kernel and Cilium's networking datapath. He is a long-term Linux kernel core contributor in the eBPF and networking subsystem for over a decade, and co-maintains both eBPF and XDP.`,
        avatar: danielBorkmann,
        name: 'Daniel Borkmann',
        position: 'Staff Software Engineer',
        blogUrl: 'http://borkmann.ch/',
      },
      {
        logo: GoogleLogo,
        text: `KP Singh is the author and maintainer of the mainline eBPF LSM (a.k.a KRSI) for flexible security audit and policy enforcement on Linux. At Google, he leads the effort to build telemetry and detection software deployed on Google's corp, prod and cloud endpoints spanning different operating systems. He's also the cross functional lead for the security of linux OS deployed in Google's data centers.`,
        avatar: kpSingh,
        name: 'KP Singh',
        position: 'Staff Software Engineer',
        twitterUrl: 'https://twitter.com/__kpsingh',
        linkedInUrl: 'https://www.linkedin.com/in/kp-singh-94b33b19',
      },
      {
        logo: NetflixLogo,
        text: `Brendan Gregg is an internationally renowned expert in computing performance. He is a senior performance engineer at Netflix, where he does performance design, evaluation, analysis, and tuning. He has delivered industry-leading performance for a variety of products, and has created widely used performance tools, methodologies, and visualizations, including flame graphs. His work is the basis for multiple startups.`,
        avatar: brendanGregg,
        name: 'Brendan Gregg',
        position: 'Senior Performance Engineer',
        twitterUrl: 'https://twitter.com/brendangregg',
        blogUrl: 'https://www.brendangregg.com',
      },
      {
        logo: MicrosoftLogo,
        text: `Dave has 25 years of Internet standards experience where he has authored over 55 RFCs, chaired several working groups in the Internet Engineering Task Force (IETF), and served as a member of the Internet Architecture Board (IAB) for 11 years. He been a maintainer various past and present cross-platform open source projects, including AllJoyn, IoTivity, and Open Enclave. During the early 2000's, Dave led the team in Microsoft that rewrote the core Windows TCP/IP stack to add IPv6 support, and is now leading the efforts to make eBPF be cross-platform, including the eBPF for Windows project.`,
        avatar: daveThaler,
        name: 'Dave Thaler',
        position: 'Partner Software Engineer',
        twitterUrl: 'https://twitter.com/thalerdave',
        githubUrl: 'https://github.com/dthaler',
        linkedInUrl: 'https://www.linkedin.com/in/dave-thaler-83939721b/',
      },
      {
        logo: IsovalentLogo,
        text: `Joe is a co-maintainer for the Cilium project. He’s passionate about building efficient network dataplanes, having contributed to a variety of OSS projects including Cilium, Open vSwitch, and the Linux kernel.`,
        avatar: joeStringer,
        name: 'Joe Stringer',
        position: 'Staff Software Engineer',
        twitterUrl: 'https://twitter.com/joestringernz',
        linkedInUrl: 'https://www.linkedin.com/in/joestringernz',
        githubUrl: 'https://github.com/joestringer',
      },
      {
        logo: FacebookLogo,
        text: `Alexei is the co-creator and co-maintainer of eBPF. When not hacking the kernel Alexei enjoys off-grid activities with his family: backpacking, hiking, camping.`,
        avatar: alexeiStarovoitov,
        name: 'Alexei Starovoitov',
        position: 'Software Engineer',
      },
    ],
  };

  return (
    <MainLayout>
      <SEO data={{ title: 'eBPF Members', slug: pathname }} />
      <HeroFoundation />
      <EbpfFoundation {...ebpfFoundation} />
      <SteeringCommittee {...steeringCommittee} />
      <Members {...members} />
      <Join {...join} />
    </MainLayout>
  );
};

export default FoundationPage;
