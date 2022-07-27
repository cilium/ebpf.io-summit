import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import BackmarketLogo from './images/backmarket.inline.svg';
import BlackberryLogo from './images/blackberry.inline.svg';
import DatadogLogo from './images/datadog.inline.svg';
import GoogleLogo from './images/google.inline.svg';
import IndependentLogo from './images/independent.inline.svg';
import IsovalentLogo from './images/isovalent.inline.svg';
import LinkedinLogo from './images/linkedin.inline.svg';
import MeltwaterLogo from './images/meltwater.inline.svg';
import MetaLogo from './images/meta.inline.svg';
import PalantirLogo from './images/palantir.inline.svg';
import PolarSignalsLogo from './images/polar-signals.inline.svg';
import QualysLogo from './images/qualys.inline.svg';
import QueenMaryLogo from './images/queen-mary.inline.svg';
import SeznamLogo from './images/seznam-cz.inline.svg';
import SoloIoLogo from './images/soloio.inline.svg';
import ThoughtspotLogo from './images/thoughtspot.inline.svg';
import VMvareLogo from './images/vmvare.inline.svg';

const title = 'Our volunteers';
const description = 'Thank you to our program committee for helping select the sessions this year!';

const logos = [
  { logo: MetaLogo },
  { logo: MeltwaterLogo },
  { logo: IsovalentLogo },
  { logo: BackmarketLogo },
  { logo: GoogleLogo },
  { logo: LinkedinLogo },
  { logo: VMvareLogo },
  { logo: BlackberryLogo },
  { logo: IndependentLogo },
  { logo: PolarSignalsLogo },
  { logo: SeznamLogo },
  { logo: QueenMaryLogo },
  { logo: DatadogLogo },
  { logo: QualysLogo },
  { logo: PalantirLogo },
  { logo: SoloIoLogo },
  { logo: ThoughtspotLogo },
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
        {logos.map(({ logo: Logo }, index) => (
          <div className="px-6 py-2 rounded-full shadow-card" key={index}>
            <Logo className="h-8 w-auto shrink-0" />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default OurVolunteers;
