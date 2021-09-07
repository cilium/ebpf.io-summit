import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import DownloadIcon from 'icons/download.inline.svg';

const Talks = ({ title, items }) => (
  <section className="py-28 md:py-20" id="talks">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <ul className="mt-14">
        {items.map(({ speaker, title, linkUrl, buttonUrl }, index) => (
          <li
            className="flex items-center justify-between py-8 border-t-2 last:border-b-2 border-gray-2 md:flex-col md:items-start md:space-y-4"
            key={index}
          >
            <div className="space-y-2.5">
              <span className="leading-none text-gray-1">{speaker}</span>
              <h3 className="text-xl font-bold leading-snug md:text-lg">{title}</h3>
            </div>
            <div className="flex items-center space-x-6 lg:flex-col lg:items-end lg:space-x-0 lg:space-y-4 md:flex-row-reverse md:items-center md:space-y-0">
              {linkUrl && (
                <Link
                  className="items-baseline text-lg md:text-base md:ml-5"
                  theme="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={linkUrl}
                >
                  <DownloadIcon className="mr-2.5" />
                  Download PDF
                </Link>
              )}
              <Button
                theme="black"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                to={buttonUrl}
              >
                Watch
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

Talks.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      speaker: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Talks;
