import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';
import shape4 from './images/shape-4.svg';

const shapes = [shape1, shape2, shape3, shape4];
const LastYear = ({ title, description, link, items }) => (
  <section
    className="mt-28 md:mt-20 pt-40 pb-32 md:pt-28 md:pb-24 bg-gray-3 bg-hexagon bg-no-repeat bg-right"
    id="last-year's-summit"
  >
    <Container>
      <div className="grid grid-cols-2 items-start gap-x-16">
        <div className="flex flex-col items-start">
          <Heading tag="h2" size="xl" className="!font-bold">
            {title}
          </Heading>
          <p className="mt-6 text-xl md:text-lg text-left">{description}</p>
          <Link className="text-lg mt-7" theme="underline" to={link.url}>
            {link.title}
          </Link>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src="https://www.youtube.com/embed/5XdV4PYNcro"
            frameBorder="0"
            width={592}
            height={333}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded YouTube"
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-36 lg:mt-32 md:mt-28 sm:mt-24 grid grid-cols-4 max-w-[800px] mx-auto gap-x-10 place-items-center gap-y-8 md:grid-cols-2 md:gap-x-8">
        {items.map(({ number, unit, theme }, index) => {
          const isThemeBlack = theme === 'black';
          return (
            <div className="relative max-w-[160px]" key={index}>
              <img src={shapes[index]} alt="" aria-hidden />
              <div className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-y-0.5">
                <span
                  className={`font-semibold leading-none text-7xl lg:text-5xl md:text-6xl xs:text-5xl ${
                    isThemeBlack ? 'text-primary-5' : 'text-white'
                  }`}
                >
                  {number}
                </span>
                <span
                  className={`text-base font-medium leading-none ${
                    isThemeBlack ? 'text-black' : 'text-white'
                  }`}
                >
                  {unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-x-8 md:grid-cols-1 mt-32 lg:mt-28 mg:mt-24 sm:mt-20 place-items-center">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            There is so much good content and awesome speakers at
            <a href="https://twitter.com/hashtag/ebpfSummit?src=hash&amp;ref_src=twsrc%5Etfw">
              #ebpfSummit
            </a>
            . I love to learn about such innovative and fascinating topic
          </p>
          &mdash; Pablo Moncada Isla (@pmoncadaisla)
          <a href="https://twitter.com/pmoncadaisla/status/1321526526035349505?ref_src=twsrc%5Etfw">
            October 28, 2020
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            I&#39;m at the
            <a href="https://twitter.com/hashtag/eBPFSummit?src=hash&amp;ref_src=twsrc%5Etfw">
              #eBPFSummit
            </a>
            today (and tomorrow), and so far each talk has been at the perfect level of technical
            depth 🔥. Complex stuff, explained in a really accessible way.
            <br />
            <br />
            Props to the organizers!
          </p>
          &mdash; nickt (@nicktrav)
          <a href="https://twitter.com/nicktrav/status/1321506792879255554?ref_src=twsrc%5Etfw">
            October 28, 2020
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/hashtag/eBPFsummit?src=hash&amp;ref_src=twsrc%5Etfw">
              #eBPFsummit
            </a>
            CTF is kicking my ass, but I dig it. It&#39;s my first time doing anything like this.
            Looking forward to my mind melting for the next two days!
          </p>
          &mdash; Alex Kirby (@iprouteget)
          <a href="https://twitter.com/iprouteget/status/1427869603133227017?ref_src=twsrc%5Etfw">
            August 18, 2021
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Really digging the eBPF Summit 😀 had far too much fun watching the CTF walkthrough
            <a href="https://twitter.com/hashtag/eBPFSummit?src=hash&amp;ref_src=twsrc%5Etfw">
              #eBPFSummit
            </a>
          </p>
          &mdash; Jason W. Eckert 💉💉💉 (@the_unix_guru)
          <a href="https://twitter.com/the_unix_guru/status/1428060449875152902?ref_src=twsrc%5Etfw">
            August 18, 2021
          </a>
        </blockquote>
      </div>
    </Container>
  </section>
);

LastYear.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LastYear;
