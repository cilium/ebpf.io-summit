import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import hexagonBg from './images/hexagon-background.svg';
import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';
import shape4 from './images/shape-4.svg';

const shapes = [shape1, shape2, shape3, shape4];
const LastYear = ({ title, description, link, items }) => {
  const { avatar1, avatar2, avatar3, avatar4 } = useStaticQuery(graphql`
    query {
      avatar1: file(relativePath: { eq: "pages/summit-2022/last-year/pablo-moncada.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 44)
        }
      }
      avatar2: file(relativePath: { eq: "pages/summit-2022/last-year/alex-kirby.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 44)
        }
      }
      avatar3: file(relativePath: { eq: "pages/summit-2022/last-year/nickt.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 44)
        }
      }
      avatar4: file(relativePath: { eq: "pages/summit-2022/last-year/jason-eckert.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 44)
        }
      }
    }
  `);

  const twitterCards = [
    {
      avatar: avatar1,
      name: 'Pablo Moncada Isla',
      nick: '@pmoncadaisla',
      text: 'There is so much good content and awesome speakers at <a href="https://twitter.com/hashtag/ebpfSummit?src=hash&amp;ref_src=twsrc%5Etfw" rel="noopener noreferrer" target="_blank">#ebpfSummit</a>. I love to learn about such innovative and fascinating topic',
      time: '10:57 pm',
      date: '28 Oct 2020',
      url: 'https://twitter.com/pmoncadaisla/status/1321526526035349505?ref_src=twsrc%5Etfw',
    },
    {
      avatar: avatar2,
      name: 'Alex Kirby',
      nick: '@iprouteget',
      text: `<a href="https://twitter.com/hashtag/ebpfSummit?src=hash&amp;ref_src=twsrc%5Etfw" rel="noopener noreferrer" target="_blank">#eBPFsummit</a> CTF is kicking my ass, but I dig it. It's my first time doing anything like this. Looking forward to my mind melting for the next two days!`,
      time: '9:46 am',
      date: '18 Aug 2021',
      url: 'https://twitter.com/iprouteget/status/1427869603133227017?ref_src=twsrc%5Etfw',
    },
    {
      avatar: avatar3,
      name: 'nickt',
      nick: '@nicktrav',
      text: `<p>I'm at the <a href="https://twitter.com/hashtag/ebpfSummit?src=hash&amp;ref_src=twsrc%5Etfw" rel="noopener noreferrer" target="_blank">#eBPFSummit</a> today (and tomorrow), and so far each talk has been at the perfect level of technical depth 🔥. Complex stuff, explained in a really accessible way.</p>
      <p>Props to the organizers!</p>`,
      time: '9:39 pm',
      date: '28 Oct 2020',
      url: 'https://twitter.com/nicktrav/status/1321506792879255554?ref_src=twsrc%5Etfw',
    },
    {
      avatar: avatar4,
      name: 'Jason W. Eckert',
      nick: '@the_unix_guru',
      text: `Really digging the eBPF Summit 😀 had far too much fun watching the CTF walkthrough <a  href="https://twitter.com/hashtag/ebpfSummit?src=hash&amp;ref_src=twsrc%5Etfw" rel="noopener noreferrer" target="_blank">#eBPFSummit</a>`,
      time: '10:25 pm',
      date: '18 Aug 2021',
      url: 'https://twitter.com/the_unix_guru/status/1428060449875152902?ref_src=twsrc%5Etfw',
    },
  ];

  return (
    <section
      className="relative mt-28 md:mt-20 pt-40 lg:pt-32 pb-32 md:pt-20 md:pb-20 overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gray-3 after:-z-20"
      id="last-year-summit"
    >
      <Container>
        <div className="grid grid-cols-2 items-start gap-x-8 lg:grid-cols-1 gap-y-10">
          <div className="flex flex-col items-start max-w-[546px]">
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
        <div className="relative">
          <img
            className="absolute -z-10 top-1/2 md:hidden translate-y-[calc(-50%-13.5rem)] left-1/2 w-[1501px] h-[1015px] max-w-none translate-x-[calc(-50%+3rem)]"
            width={1501}
            height={1015}
            src={hexagonBg}
            alt=""
            aria-hidden
          />
          <ul className="mt-[8.5rem] mx-auto lg:mt-32 md:mt-28 sm:mt-24 grid grid-cols-4 max-w-[760px] lg:max-w-[740px] md:max-w-[400px] gap-x-10 lg:gap-x-[82px] place-items-center gap-y-8 md:grid-cols-2 md:gap-x-8">
            {items.map(({ number, unit, textColor, numberColor }, index) => {
              const isTextBlack = textColor === 'black';
              const isNumberWhite = numberColor === 'white';
              return (
                <li className="relative max-w-[160px] lg:min-w-[140px]" key={index}>
                  <img src={shapes[index]} alt="" aria-hidden />
                  <div className="absolute flex flex-col transform -translate-x-1/2 text-center -translate-y-1/2 top-1/2 left-1/2 space-y-0.5">
                    <span
                      className={`font-semibold leading-none text-[64px] lg:text-5xl md:text-6xl xs:text-5xl ${
                        isNumberWhite ? 'text-white' : 'text-primary-5'
                      }`}
                    >
                      {number}
                    </span>
                    <span
                      className={`text-base font-medium leading-none ${
                        isTextBlack ? 'text-black' : 'text-white'
                      }`}
                    >
                      {unit}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-1 mt-32 lg:mt-28 mg:mt-24 sm:mt-20 place-items-start">
          {twitterCards.map(({ avatar, name, nick, text, time, date, url }, index) => (
            <Link
              className="border-[1.5px] border-gray-2 rounded-lg bg-white p-8 flex flex-col justify-start lg:p-7"
              key={index}
              to={url}
              target="_blank"
            >
              <div className="flex space-x-3 items-center self-start">
                <GatsbyImage image={getImage(avatar)} alt={name} />
                <div className="flex flex-col">
                  <span className="font-bold">{name}</span>
                  <span className="text-gray-1 mt-1.5">{nick}</span>
                </div>
              </div>
              <p
                className="mt-5 with-link-secondary text-xl leading-normal lg:text-lg"
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <div className="mt-4 text-gray-1 leading-normal flex space-x-5 self-start">
                <span>{time}</span>
                <span className="relative before:absolute before:w-[3px] before:h-[3px] before:rounded-full before:block before:bg-gray-1 before:top-1/2 before:-translate-y-1/2 before:-left-3">
                  {date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
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
      textColor: PropTypes.oneOf(['black', 'white']).isRequired,
      numberColor: PropTypes.oneOf(['white', 'orange']).isRequired,
    })
  ).isRequired,
};

export default LastYear;
