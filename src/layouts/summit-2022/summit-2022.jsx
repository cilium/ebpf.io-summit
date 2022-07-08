import PropTypes from 'prop-types';
import React from 'react';

import SummitFooter from 'components/pages/summit-2022/summit-footer';
import SummitHeader from 'components/pages/summit-2022/summit-header';
import SEO from 'components/shared/seo';

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
