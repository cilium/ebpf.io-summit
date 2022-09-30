import PropTypes from 'prop-types';
import React from 'react';

import SummitFooter from 'components/pages/summit-2022/summit-footer';
import SummitHeader from 'components/pages/summit-2022/summit-header';

const SummitLayout = ({ children }) => (
  <>
    <SummitHeader />
    <main>{children}</main>
    <SummitFooter />
  </>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SummitLayout;
