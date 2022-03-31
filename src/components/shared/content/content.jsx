import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from '../container';
import Heading from '../heading';

const Content = ({ title, content, pathname }) => (
  <article className="my-28 md:my-20">
    <Container>
      <Heading tag="h2" size="xl">
        {title}
      </Heading>
      <div
        className={classNames(
          'mt-12 prose prose-xl md:prose-lg sm:prose max-w-none',
          pathname === '/charter/' && 'without-bullet-list'
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  </article>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Content;
