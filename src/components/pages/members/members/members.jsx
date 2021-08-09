import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Members = ({ title, items }) => (
  <section className="my-28 md:my-20">
    <Container>
      <Heading tag="h2" size="xl">
        {title}
      </Heading>
      <div>
        {items.map(({ name, logos }) => (
          <div className="mt-12" key={name}>
            <h3 className="text-2xl font-bold leading-tight md:text-xl">{name}</h3>
            <div className="grid grid-cols-4 gap-8 mt-7 lg:grid-cols-2 md:gap-6 sm:gap-x-4 xs:grid-cols-1">
              {logos.map((Logo, index) => (
                <Logo className="xl:w-[98%] xl:h-auto" key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

Members.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logos: PropTypes.arrayOf(PropTypes.any).isRequired,
    })
  ).isRequired,
};

Members.defaultProps = {};

export default Members;
