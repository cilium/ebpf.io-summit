import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import DangerousHtml from 'components/shared/dangerous-html';
import Heading from 'components/shared/heading';

const SpeakerWall = ({ title }) => {
  const data = useStaticQuery(graphql`
    query sessionizeQuery {
      sessionizeSpeakers
    }
  `);

  return (
    <section className="bg-white mt-40 lg:mt-32 md:mt-28 sm:mt-24" id="speakers">
      <Container className="min-h-[336px]">
        <Heading className="text-center" tag="h2">
          {title}
        </Heading>
        {data.sessionizeSpeakers ? (
          <DangerousHtml className="mt-14 md:mt-12 sm:mt-10" html={data.sessionizeSpeakers} />
        ) : null}
      </Container>
    </section>
  );
};

SpeakerWall.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SpeakerWall;
