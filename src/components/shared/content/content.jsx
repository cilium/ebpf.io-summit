import PropTypes from 'prop-types';
import React from 'react';

import Container from '../container';
import Heading from '../heading';

const Content = ({ title, content }) => (
  <article className="my-28 md:my-20">
    <Container>
      <Heading tag="h2" size="xl">
        {title}
      </Heading>
      <div
        className="mt-12 prose prose-xl md:prose-lg sm:prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  </article>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
