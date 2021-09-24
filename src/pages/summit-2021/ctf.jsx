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
  // button1: {
  //   url: 'https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true',
  //   title: 'Register',
  // },
  button: {
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
      stage: 'Stage 1',
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
<p>Unfortunately, a jamming signal was installed. You can see it with <code>iptables-save -c</code>. You are not allowed to remove it but you are allowed to bypass it.</p>
<p>Your ally mentioned the existence of a <code>/bpf</code> directory, which you might find useful.</p>

<p>The CTF challenge itself needs to run as a <b>privileged</b> container. Start the challenge as follows:</p>
<pre>
sudo docker run --privileged --name ctf-1 --rm --tty --interactive "quay.io/isovalent/ebpf-summit-2021-ctf-challenge-1"
</pre>
<p>To create a new terminal:</p>
<pre>
sudo docker exec -ti ctf-1 /bin/bash
</pre>

<h4>Rules</h4>
<ol>
 <li><b>Do not add or remove any iptables rules.</b> The goal of the challenge is to solve it using eBPF only.</li>
</ol>

<p>Good luck!</p>

<h4>Hints</h4>
<p>A mysterious entity has reached out on your Holocomm while you were flying towards the imperial ships. There are three hints available to help you evade the blockade if you feel stuck, they said. But beware! Each clue you read may bring you a little bit closer to the Dark Side! (The hints are ordered, start with number 1.)</p>
<ul>
  <li><a href="https://isogo.to/ctf-stage1-hint1">Hint 1</a></li>
  <li><a href="https://isogo.to/ctf-stage1-hint2">Hint 2</a></li>
  <li><a href="https://isogo.to/ctf-stage1-hint3">Hint 3</a></li>
</ul>
`,
    },
    {
      stage: 'Stage 2',
      content: `<h4>The Story So Far</h4>
<blockquote>
<p>It was a trap!</p>
<p>After the Empire invaded your home planet and stole your hives, you, Jephen’Tsa, joined the Rebel Alliance and helped them retrieve secret information about the Death Star… Or so you thought. Blue Hex, your former ally, has turned coat! She never went to the Death Star. While she had you believe you hacked into the Death Star controls, she just stole data from a smaller ship for her own account, and secretly implanted a tracer for your communications. Now the Empire has found your base, and made you a prisoner!</p>
<p>Some Rebels managed to flee, but you have been taken aboard the <em>Grim Hornet</em>, a Star Destroyer, the Empire’s flagship now controlling the whole solar system. On the way to your cell, you soon manage to escape from your escort of stormtroopers. Ha! That’s what happens when they take you on the same ship as your bees and don’t bother confiscating your remote control for the hives’ hatches. After a few epic moments involving laser shots, multiple stings, various explosions, and even a lightsaber duel—the Force <em>is</em> strong with you—you reach the control room of the ship.</p>
<p>You now have a unique chance to reverse the situation. You are logged in into the system, and you know that there is a passphrase to temporarily deactivate the whole fleet. The remaining Rebels are outside, only waiting for a chance to neutralize the imperial ships. But will you manage to lift the measures protecting that secret? The destiny of your planet is in your hands. May the Force be with you!</p>
</blockquote>

<h4>Prerequisites</h4>
<p>This challenge requires Docker and a recent Linux kernel with BTF support. We recommend running it with <em>ContainerOS M93</em> on an <a href="https://cloud.google.com/free">always free <code>e2-micro</code></a> instance on Google Cloud:</p>

<pre>
VM_NAME=ebpf-summit-ctf3

# Create VM
gcloud compute instances create $VM_NAME \\
    --machine-type=e2-micro \\
    --zone=us-central1-a \\
    --image-project=cos-cloud \\
    --image-family=cos-dev

# Log in
gcloud compute ssh --zone=us-central1-a $VM_NAME

# Delete VM (when done)
gcloud compute instances delete --zone=us-central1-a $VM_NAME
</pre>


<h4>Task</h4>
<p>The CTF challenge itself needs to run as a <b>privileged</b> container. Start the challenge as follows:</p>
<pre>
sudo docker run --privileged --name ctf-3 --rm --tty --interactive "quay.io/isovalent/ebpf-summit-2021-ctf-challenge-3"
</pre>

<p>Your objective is to receive a secret from a TCP server. The server must be accessed via the loopback device (i.e. <code>localhost</code>) and is listening on port 1977. Try to access it (from inside the CTF container) as follows:</p>
<pre>
curl localhost:1977
</pre>
<p>As you will notice, there are some security measures in place which will prevent you from accessing this server. Your task is to disable these security measures so that the above <code>curl</code> command can succeed.</p>
<p>Good luck!</p>
`,
    },
    {
      stage: 'Stage 3',
      content: `<h4>The Story So Far</h4>
<blockquote>
<p>You are Jephen’Tsa, former beekeeper, and active member of the Rebel Alliance now that the Empire has invaded your home planet. You only joined recently, but the Alliance is, well, pretty much understaffed, and given your recent achievements to escape a blockade, you already got a top-priority assignment. Blue Hex, a fellow member, has stolen a terminal from a stormtrooper. She’s confident that, with the help of a new imperial tool, it could give you access to the management systems of the Death Star, no less!</p>
<p>While you study the stolen terminal in the base, Blue Hex takes her X-wing and flies towards the gigantic station somewhere in the Inner Rim, relying on you to lift the restrictions so she can infiltrate the system. Do your best!</p>
</blockquote>

<h4>Task</h4>
<p>Your friend <code>x-wing</code> needs to connect to the Death Star's management system (<code>death-star</code>), but communications seem to be blocked. There may be some sort of eBPF-based firewall in place. Luckily you were able to get access to a stormtrooper's unmonitored terminal (<code>stormtrooper</code>) and will hopefully be able to open a breach in the firewall to allow communications to flow.</p>

<h4>Prerequisites</h4>
<ul>
<li><a href="https://minikube.sigs.k8s.io/docs/start/">Minikube</a></li>
<li><a href="https://github.com/cilium/cilium-cli/releases">Cilium CLI</a></li>
</ul>

<h4>Mandatory Preparation Steps</h4>
<pre>
minikube start --network-plugin=cni
cilium install
cilium hubble enable
</pre>

<pre>
minikube kubectl -- create ns inner-rim
minikube kubectl -- apply -n inner-rim -f https://isogo.to/ctf2-yaml
</pre>

<h4>Rules</h4>
<ol>
 <li>Everything that you are able to do within the pod <code>stormtrooper-XXXXXX-yyyyy</code> is allowed. The instructions on how to enter this pod are provided below, in the <em>Start</em> section.</li>
 <li>You can open <a href="https://editor.cilium.io">editor.cilium.io</a>, a brand new technology deployed by the Empire, and interact with it freely and copy/paste from there into the <code>stormtrooper-XXXXXX-yyyyy</code> pod.</li>
 <li>Everything else is forbidden.</li>
</ol>

<h4>Start</h4>
<p>When you are ready to start, run</p>
<pre>
minikube kubectl -- exec -n inner-rim -ti deployment/stormtrooper -- bash
</pre>
<p>Good luck!</p>
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
