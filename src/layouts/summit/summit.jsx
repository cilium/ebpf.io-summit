import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const SummitLayout = ({ path, children }) => (
  <>
    <SEO data={{ slug: path }} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SummitLayout;
