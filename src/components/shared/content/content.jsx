import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from '../container';

const Content = ({ content, pathname }) => (
  <article className="my-28 md:my-20">
    <Container>
      <div
        className={classNames(
          'mt-12 prose prose-xl md:prose-lg sm:prose max-w-none sm:break-words',
          pathname === '/charter/' && 'without-bullet-list'
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  </article>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Content;
