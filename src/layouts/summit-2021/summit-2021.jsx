import PropTypes from 'prop-types';
import React from 'react';

import SEO from 'components/shared/seo';
import SummitFooter from 'components/shared/summit-footer';
import SummitHeader from 'components/shared/summit-header';

const SummitLayout = ({ path, children }) => (
  <>
    <SEO data={{ slug: path }} />
    <SummitHeader />
    <main>{children}</main>
    <SummitFooter />
  </>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SummitLayout;
