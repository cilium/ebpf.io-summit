import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import GithubIcon from './icons/github.inline.svg';
import LinkedInIcon from './icons/linkedin.inline.svg';
import ShareIcon from './icons/share.inline.svg';
import TwitterIcon from './icons/twitter.inline.svg';

const SteeringCommittee = ({ title, description, items }) => (
  <section className="mt-40 lg:mt-32 md:mt-24">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="mt-8 text-xl md:text-lg max-w-[1008px]">{description}</p>
      <div className="grid grid-cols-2 gap-8 mt-14 lg:grid-cols-1">
        {items.map(
          (
            {
              logo: Logo,
              text,
              avatar,
              name,
              position,
              twitterUrl,
              linkedInUrl,
              githubUrl,
              blogUrl,
            },
            index
          ) => {
            const links = [
              { icon: TwitterIcon, url: twitterUrl },
              { icon: LinkedInIcon, url: linkedInUrl },
              { icon: GithubIcon, url: githubUrl },
              { icon: ShareIcon, url: blogUrl },
            ];
            const socialLinks = links.filter((link) => link.url !== undefined);
            return (
              <div className="flex flex-col p-8 border-2 border-gray-2" key={index}>
                <Logo />
                <p className="my-8 text-lg">{text}</p>
                <div className="flex items-center justify-between mt-auto sm:flex-col sm:items-start">
                  <div className="flex items-center space-x-3 sm:order-1 sm:mt-6">
                    <GatsbyImage
                      className="flex-shrink-0 w-12 h-12 rounded-full"
                      image={getImage(avatar)}
                      alt={name}
                    />
                    <div className="flex flex-col space-y-1.5">
                      <span className="text-xl font-bold leading-none">{name}</span>
                      <span className="leading-none text-gray-1">{position}</span>
                    </div>
                  </div>
                  <div className="flex space-x-4 xl:space-x-3">
                    {socialLinks.map(
                      ({ icon: Icon, url }, index) =>
                        url && (
                          <Link key={index} target="_blank" rel="noopener noreferrer" to={url}>
                            <Icon className="xl:w-7 xl:h-auto lg:w-max sm:w-8" />
                          </Link>
                        )
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Container>
  </section>
);

SteeringCommittee.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
      avatar: PropTypes.objectOf(PropTypes.any).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      twitterUrl: PropTypes.string,
      linkedInUrl: PropTypes.string,
      githubUrl: PropTypes.string,
      blogUrl: PropTypes.string,
    })
  ).isRequired,
};

SteeringCommittee.defaultProps = {};

export default SteeringCommittee;
