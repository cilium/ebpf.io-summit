import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import BackmarketLogo from './images/backmarket.svg';
import BlackberryLogo from './images/blackberry.svg';
import DatadogLogo from './images/datadog.svg';
import GoogleLogo from './images/google.svg';
import IsovalentLogo from './images/isovalent.svg';
import LinkedinLogo from './images/linkedin.svg';
import MeltwaterLogo from './images/meltwater.svg';
import MetaLogo from './images/meta.svg';
import PalantirLogo from './images/palantir.svg';
import PolarSignalsLogo from './images/polar-signals.svg';
import QualysLogo from './images/qualys.svg';
import QueenMaryLogo from './images/queen-mary.svg';
import SeznamLogo from './images/seznam-cz.svg';
import SoloIoLogo from './images/soloio.svg';
import ThoughtspotLogo from './images/thoughtspot.svg';
import VMvareLogo from './images/vmvare.svg';

const title = 'Our volunteers';
const description = 'Thank you to our program committee for helping select the sessions this year!';

// eslint-disable-next-line react/prop-types
const Logo = ({ logo, title, className }) => (
  <img className={className} src={logo} width={110} height={32} alt={title} loading="lazy" />
);

const logos = [
  { logo: MetaLogo, title: 'Meta' },
  { logo: MeltwaterLogo, title: 'Meltwater' },
  { logo: IsovalentLogo, title: 'Isovalent' },
  { logo: BackmarketLogo, title: 'Backmarket' },
  { logo: GoogleLogo, title: 'Google' },
  { logo: LinkedinLogo, title: 'Linkedin' },
  { logo: VMvareLogo, title: 'VMvare' },
  { logo: BlackberryLogo, title: 'Blackberry' },
  { logo: PolarSignalsLogo, title: 'Polar Signals' },
  { logo: SeznamLogo, title: 'Seznam' },
  { logo: QueenMaryLogo, title: 'QueenMary' },
  { logo: DatadogLogo, title: 'Datadog' },
  { logo: QualysLogo, title: 'Qualys' },
  { logo: PalantirLogo, title: 'Palantir' },
  { logo: SoloIoLogo, title: 'Solo.io' },
  { logo: ThoughtspotLogo, title: 'Thoughtspot' },
];

const OurVolunteers = () => (
  <section className="my-32 lg:my-28 md:my-24 sm:my-20" id="volunteers">
    <Container className="flex flex-col items-center">
      <div className="max-w-3xl md:max-w-2xl text-center">
        <Heading size="xl" tag="h2">
          {title}
        </Heading>
        <p className="text-xl lg:text-lg md:text-base mt-5 leading-normal">{description}</p>
      </div>
      <div className="mt-12 md:mt-10 gap-5 w-full flex flex-wrap items-center justify-center">
        {logos.map(({ logo, title }, index) => (
          <div className="px-6 py-2 rounded-full shadow-card" key={index}>
            <Logo logo={logo} title={title} className="w-auto shrink-0 h-8" />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default OurVolunteers;
