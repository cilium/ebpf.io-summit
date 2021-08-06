import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ClockIcon from 'icons/clock.inline.svg';

const Sessions = ({ title, items, bottomText }) => (
  <section className="pb-40 pt-28 md:pt-20 md:pb-28 sm:pb-20">
    <Container small>
      <Heading tag="h2">{title}</Heading>
      <div className="mt-12">
        {items.map(({ stage, time, linkUrl, linkText }, index) => (
          <div className="py-8 border-t-2 border-gray-2 last:border-b-2 md:py-6" key={index}>
            <Heading tag="h3" size="lg" className="font-bold">
              {stage}
            </Heading>
            <span className="flex items-center mt-4 text-xl md:text-lg">
              <ClockIcon className="flex-shrink-0 mr-3" />
              {time} <span className="contents">–</span>{' '}
              <Link
                className="font-bold contents"
                theme="primary"
                to={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkText}
              </Link>
            </span>
          </div>
        ))}
      </div>
      <span className="inline-block mt-12 text-xl md:text-lg text-gray-1 md:mt-8">
        {bottomText}
      </span>
    </Container>
  </section>
);

Sessions.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      stage: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ).isRequired,
  bottomText: PropTypes.string.isRequired,
};

export default Sessions;
