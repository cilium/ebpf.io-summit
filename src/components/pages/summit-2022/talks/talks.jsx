import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import useViewAll from 'hooks/use-view-all';

const Talks = ({ className, title, items }) => {
  const { handleClick, maxRange, isFullListShown } = useViewAll(items.length);
  return (
    <section className={className} id="talks">
      <Container small>
        <Heading className="text-center text-[44px]" tag="h2">
          {title}
        </Heading>
        <ul className="mt-14">
          {items.slice(0, maxRange).map(({ speaker, topic, pdfLink, youtubeLink }, index) => (
            <li
              className="flex items-center justify-between py-8 border-t-2 last:border-b-2 border-gray-2 lg:flex-col lg:items-start lg:space-y-4"
              key={index}
            >
              <div className="space-y-2.5">
                <span className="leading-none text-gray-1">{speaker}</span>
                <h3 className="text-xl font-bold leading-snug md:text-lg max-w-[696px]">{topic}</h3>
              </div>
              <div className="flex ml-12 lg:ml-0 items-center space-x-4 lg:space-x-0 lg:flex-row-reverse lg:items-center lg:space-y-0">
                {pdfLink && (
                  <Button
                    className="items-center h-11 leading-none lg:h-10 lg:ml-5 rounded-lg py-3.5 px-5 "
                    theme="gray"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    to={pdfLink}
                  >
                    Download PDF
                  </Button>
                )}
                <Button
                  className="rounded-lg py-3.5 leading-none px-5"
                  theme="gray"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={youtubeLink}
                >
                  Watch
                </Button>
              </div>
            </li>
          ))}
        </ul>
        {!isFullListShown && (
          <div className="mt-14 text-center">
            <Button
              className="text-xl text-orange-1 transition-colors duration-200 hover:text-orange-2"
              theme="link-primary"
              size="none"
              withArrow
              onClick={handleClick}
            >
              View all
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};
Talks.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      speaker: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      pdfLink: PropTypes.string,
      youtubeLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Talks.defaultProps = {
  className: null,
};

export default Talks;
