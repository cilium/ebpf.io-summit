import PropTypes from 'prop-types';
import React from 'react';

import MainFooter from 'components/shared/main-footer';
import MainHeader from 'components/shared/main-header';
import SEO from 'components/shared/seo';

const MainLayout = ({ path, children }) => (
  <>
    <SEO data={{ slug: path }} />
    <MainHeader />
    <main>{children}</main>
    <MainFooter />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
