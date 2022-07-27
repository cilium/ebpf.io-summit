import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import backmarketLogo from './images/backmarket.svg';
import blackberryLogo from './images/blackberry.svg';
import datadogLogo from './images/datadog.svg';
import googleLogo from './images/google.svg';
import isovalentLogo from './images/isovalent.svg';
import linkedinLogo from './images/linkedin.svg';
import meltwaterLogo from './images/meltwater.svg';
import metaLogo from './images/meta.svg';
import palantirLogo from './images/palantir.svg';
import polarSignalsLogo from './images/polar-signals.svg';
import qualysLogo from './images/qualys.svg';
import queenMaryLogo from './images/queen-mary.svg';
import seznamLogo from './images/seznam-cz.svg';
import soloIoLogo from './images/soloio.svg';
import thoughtspotLogo from './images/thoughtspot.svg';
import vmvareLogo from './images/vmvare.svg';

const title = 'Our volunteers';
const description = 'Thank you to our program committee for helping select the sessions this year!';

const logos = [
  { logo: metaLogo, title: 'Meta' },
  { logo: meltwaterLogo, title: 'Meltwater' },
  { logo: isovalentLogo, title: 'Isovalent' },
  { logo: backmarketLogo, title: 'Backmarket' },
  { logo: googleLogo, title: 'Google' },
  { logo: linkedinLogo, title: 'Linkedin' },
  { logo: vmvareLogo, title: 'VMvare' },
  { logo: blackberryLogo, title: 'Blackberry' },
  { logo: polarSignalsLogo, title: 'Polar Signals' },
  { logo: seznamLogo, title: 'Seznam' },
  { logo: queenMaryLogo, title: 'QueenMary' },
  { logo: datadogLogo, title: 'Datadog' },
  { logo: qualysLogo, title: 'Qualys' },
  { logo: palantirLogo, title: 'Palantir' },
  { logo: soloIoLogo, title: 'Solo.io' },
  { logo: thoughtspotLogo, title: 'Thoughtspot' },
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
            <img
              className="w-auto shrink-0 h-8"
              src={logo}
              width={110}
              height={32}
              alt={title}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default OurVolunteers;
