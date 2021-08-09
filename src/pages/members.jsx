import React from 'react';

import EbpfFoundation from 'components/pages/members/ebpf-foundation';
import Members from 'components/pages/members/members';
import HeroFoundation from 'components/shared/hero-foundation';
import FacebookLogo from 'images/pages/members/facebook.inline.svg';
import GoogleLogo from 'images/pages/members/google.inline.svg';
import IsovalentLogo from 'images/pages/members/isovalent.inline.svg';
import MicrosoftLogo from 'images/pages/members/microsoft.inline.svg';
import NetflixLogo from 'images/pages/members/netflix.inline.svg';
import MainLayout from 'layouts/main';

const ebpfFoundation = {
  title: 'What is eBPF Foundation?',
  items: [
    {
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ipsum, scelerisque magna ante blandit. Ut vitae odio vitae quam adipiscing sit. Elit nisi, odio felis, nec et, accumsan.',
    },
  ],
};

const members = {
  title: 'Members',
  items: [
    { name: 'Platinum', logos: [FacebookLogo, GoogleLogo, IsovalentLogo, MicrosoftLogo] },
    { name: 'Silver', logos: [NetflixLogo] },
  ],
};

const MembersPage = () => (
  <MainLayout>
    <HeroFoundation />
    <EbpfFoundation {...ebpfFoundation} />
    <Members {...members} />
  </MainLayout>
);

export default MembersPage;
