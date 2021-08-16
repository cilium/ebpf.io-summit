/* eslint-disable react/prop-types */
import React from 'react';

import Ctf from 'components/pages/capture-the-flag/ctf';
import Instructions from 'components/pages/capture-the-flag/instructions';
import Participate from 'components/pages/capture-the-flag/participate';
import Sessions from 'components/pages/capture-the-flag/sessions';
import Hero from 'components/shared/hero';
import Register from 'components/shared/register';
import SEO from 'components/shared/seo';
import SummitLayout from 'layouts/summit';

const ogImage = '/images/og-ctf.png';

const hero = {
  date: 'August 18-19th',
  title: 'eBPF<br> Summit 2021',
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
  title: 'Capture The Flag',
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
      linkUrl: 'https://ebpf-summit-2021.sessionize.com/session/275707',
      linkText: 'eBPF Capture the Flag (CTF) #2',
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

const instructions = {
  title: 'Instructions',
  items: [
    {
      stage: 'Stage 1 (Challenge I)',
      content: `<h4>The Story So Far</h4>
<blockquote>
<p>You have a bad feeling about this.</p>
<p>You, Jephen’Tsa, have always kept away from politics, and you live a quiet life on the planet Berpaffyl, in the Kloudna system. You’re a beekeeper, and extracting honey from the giant bees living on the planet does not leave you much time to think about conflicts raging at the other end of the quadrant.</p>
<p>But politics caught up with you. The Empire has taken an interest in the planet, imposed a blockade, and seized various assets, including your hives. Your dear, cherished hives and bees, now aboard a Star Destroyer! They said you’d get them back. Of course, they would. But the bureaucrats from the Empire are not renowned for keeping their word, and you don’t believe them. There must be something you can do?</p>
<p>From a friend of a friend, a Mon Calamari going under the name Blue Hex that you met on a speedbike ride, you have heard that a moon in a neighbor system might be hosting more friends—the Rebel Alliance. After a few days of reflection you contact her again to ask if she knows how to pass the blockade to reach them. There is a way, she says, to bypass the jamming signals and eavesdrop the passphrase required for passing the checkpoint. You board the <i>Yellow Stripe</i>, your small aircraft, you take off and you head towards the imperial cruisers…</p>
</blockquote>

<h4>Prerequisites</h4>
<p>This challenge requires Docker and a recent Linux kernel with eBPF and WireGuard support enabled (5.6+, although Ubuntu 20.04 with kernel 5.4 and backported Wireguard support is known to work).</p>
<p>We recommend running it with Fedora CoreOS on an <a href="https://cloud.google.com/free">always free <code>e2-micro</code></a> instance on Google Cloud:</p>

<pre>
VM_NAME=ebpf-summit-ctf1

# Create VM
gcloud compute instances create $VM_NAME \\
    --machine-type=e2-micro \\
    --zone=us-central1-a \\
    --image-project=fedora-coreos-cloud \\
    --image-family=fedora-coreos-stable

# Fix docker permissions
gcloud compute ssh --zone=us-central1-a core@$VM_NAME -- sudo setfacl --modify user:core:rw /var/run/docker.sock

# Log in
gcloud compute ssh --zone=us-central1-a core@$VM_NAME

# Delete VM (when done)
gcloud compute instances delete --zone=us-central1-a $VM_NAME
</pre>

<h4>Task</h4>
<p>Your objective is to receive a secret from a UDP server. The server is running in the <code>berpaffyl</code> network namespace and is accessible via a WireGuard tunnel with the <code>100.202.1.1</code> IP address.</p>
<p>To send a request to that IP, you can use <code>echo | netcat -u 100.202.1.1 1138</code>.</p>
<p>Your ally mentioned the existence of a <code>/bpf</code> directory, which you might find useful.</p>

<p>The CTF challenge itself needs to run as a <b>privileged</b> container. Start the challenge as follows:</p>
<pre>
sudo docker run --privileged --rm --tty --interactive "quay.io/isovalent/ebpf-summit-2021-ctf-challenge-1"
</pre>

<h4>Rules</h4>
<ol>
 <li><b>Do not add or remove any iptables rules.</b> The goal of the challenge is to solve it using eBPF only.</li>
</ol>

<p>Good luck!</p>

<h4>Hints</h4>
<p>A mysterious entity has reached out on your Holocomm while you were flying towards the imperial ships. There are three hints available to help you evade the blockade if you feel stuck, they said. But beware! Each clue you read may bring you a little bit closer to the Dark Side!</p>
<ul>
  <li><a href="https://isogo.to/ctf-stage1-hint1">Hint 1</a></li>
  <li><a href="https://isogo.to/ctf-stage1-hint2">Hint 2</a></li>
  <li><a href="https://isogo.to/ctf-stage1-hint3">Hint 3</a></li>
</ul>
`,
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

const CaptureTheFlag = ({ location: { pathname } }) => (
  <SummitLayout>
    <SEO
      data={{
        title: 'eBPF Summit 2021 – Capture the flag',
        description:
          'Register now for the eBPF Summit 2021, Aug 18-19, 2021, a free virtual event for DevOps, SRE, SecOps, and developers.',
        image: ogImage,
        slug: pathname,
      }}
    />
    <Hero {...hero} />
    <Ctf {...ctf} />
    <Participate {...participate} />
    <Sessions {...sessions} />
    <Instructions {...instructions} />
    <Register {...register} />
  </SummitLayout>
);

export default CaptureTheFlag;
