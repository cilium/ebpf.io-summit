/* eslint-disable react/prop-types */
import React from 'react';

import EbpfFoundation from 'components/pages/members/ebpf-foundation';
import Members from 'components/pages/members/members';
import HeroFoundation from 'components/shared/hero-foundation';
import SEO from 'components/shared/seo';
import FacebookLogo from 'images/pages/members/facebook.inline.svg';
import GoogleLogo from 'images/pages/members/google.inline.svg';
import IsovalentLogo from 'images/pages/members/isovalent.inline.svg';
import MicrosoftLogo from 'images/pages/members/microsoft.inline.svg';
import NetflixLogo from 'images/pages/members/netflix.inline.svg';
import MainLayout from 'layouts/main';

const ebpfFoundation = {
  title: 'What is eBPF Foundation?',
  text: [
    '<p>eBPF is a revolutionary technology with origins in the Linux kernel that can run sandboxed programs in an operating system kernel. It is used to safely and efficiently extend the capabilities of the kernel without requiring to change kernel source code or load kernel modules.</p> <p>Historically, the operating system has always been an ideal place to implement observability, security, and networking functionality due to the kernel’s privileged ability to oversee and control the entire system. At the same time, an operating system kernel is hard to evolve due to its central role and high requirement towards stability and security. The rate of innovation at the operating system level has thus traditionally been lower compared to functionality implemented outside of the operating system.</p><p>eBPF changes this formula fundamentally. By allowing to run sandboxed programs within the operating system, application developers can run eBPF programs to add additional capabilities to the operating system at runtime.</p>',
    '<p>The operating system then guarantees safety and execution efficiency as if natively compiled with the aid of a Just-In-Time (JIT) compiler and verification engine. This has led to a wave of eBPF-based projects covering a wide array of use cases, including next-generation networking, observability, and security functionality.</p><p>Today, eBPF is used extensively to drive a wide variety of use cases: Providing high-performance networking and load-balancing in modern data centers and cloud native environments, extracting fine-grained security observability data at low overhead, helping application developers trace applications, providing insights for performance troubleshooting, preventive application and container runtime security enforcement, and much more. The possibilities are endless, and the innovation that eBPF is unlocked has only just begun.</p>',
  ],
};

const members = {
  title: 'Members',
  items: [
    { name: 'Platinum', logos: [FacebookLogo, GoogleLogo, IsovalentLogo, MicrosoftLogo] },
    { name: 'Silver', logos: [NetflixLogo] },
  ],
};

const MembersPage = ({ location: { pathname } }) => (
  <MainLayout>
    <SEO data={{ title: 'eBPF Members', slug: pathname }} />
    <HeroFoundation />
    <EbpfFoundation {...ebpfFoundation} />
    <Members {...members} />
  </MainLayout>
);

export default MembersPage;
