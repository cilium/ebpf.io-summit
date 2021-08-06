import React from 'react';

import Ctf from 'components/pages/capture-the-flag/ctf';
import Participate from 'components/pages/capture-the-flag/participate';
import Sessions from 'components/pages/capture-the-flag/sessions';
import Hero from 'components/shared/hero';
import Register from 'components/shared/register';
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

const ctf = {
  description:
    'Welcome to the first-ever eBPF-themed Capture the Flag (CTF) event. The CTF is open to everyone, please see below how to participate. The CTF will feature 3 stages which can be solved separately, each stage will be unlocked and open to solving 24h before the respective live solving session hosted at the eBPF Summit & the eCHO live-stream.',
  url: 'https://twitter.com/TabbySable',
  name: 'Tabitha Sable',
};

const participate = {
  title: 'How to Participate',
  items: [
    '<a href="/summit-2021/">Register</a> for the eBPF Summit 2021.',
    'Visit this site 24h before the live solving sessions for information on how to access each individual stage.',
    'Join the eBPF Summit and eCHO live-stream to attend the entertaining CTF live solving sessions moderated and commentated by Tabitha Sable.',
  ],
};

const sessions = {
  title: 'Live Solving Sessions',
  items: [
    {
      stage: 'Stage 1',
      time: 'Aug 18, 10:50am PT, 19:50 CET',
      linkUrl: 'https://ebpf-summit-2021.sessionize.com/session/275705',
      linkText: 'eBPF Capture the Flag (CTF) #1',
    },
    {
      stage: 'Stage 2',
      time: 'Aug 19, 10:55am PT, 19:55 CET',
      linkUrl: '/summit-2021/',
      linkText: 'eBPF Capture the Flag (CTF) #',
    },
    {
      stage: 'Stage 3',
      time: 'Aug 20, 7am PT, 15:00 CET',
      linkUrl: 'https://github.com/isovalent/eCHO',
      linkText: 'eCHO Live Stream',
    },
  ],
  bottomText: 'All solving sessions will be recorded and made available after the event.',
};

const register = {
  title: 'eBPF Summit 2021 Registration',
  description: `The event is fully virtual and free to attend. By signing up, you'll receive information on how to participate, ahead of the event.`,
  button: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true',
    title: 'Register',
  },
};

const CaptureTheFlag = () => (
  <MainLayout>
    <Hero {...hero} />
    <Ctf {...ctf} />
    <Participate {...participate} />
    <Sessions {...sessions} />
    <Register {...register} />
  </MainLayout>
);

export default CaptureTheFlag;
