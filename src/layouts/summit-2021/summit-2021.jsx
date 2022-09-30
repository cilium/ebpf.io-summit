import PropTypes from 'prop-types';
import React from 'react';

import SummitFooter from 'components/shared/summit-footer';
import SummitHeader from 'components/shared/summit-header';

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
