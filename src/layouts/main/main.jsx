import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

const MainLayout = ({ children, switchLanguages }) => (
  <>
    <Header switchLanguages={switchLanguages} />
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  switchLanguages: PropTypes.bool,
};

MainLayout.defaultProps = {
  switchLanguages: false,
};

export default MainLayout;
